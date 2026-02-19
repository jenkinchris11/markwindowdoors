const RESEND_API_URL = 'https://api.resend.com/emails';

const jsonResponse = (statusCode, payload) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, {
      success: false,
      error: {
        code: 'METHOD_NOT_ALLOWED',
        message: 'Only POST requests are allowed.',
      },
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return jsonResponse(400, {
      success: false,
      error: {
        code: 'INVALID_JSON',
        message: 'Request body must be valid JSON.',
      },
    });
  }

  const name = payload.name?.trim() || '';
  const contact = payload.contact?.trim() || '';
  const location = payload.location?.trim() || '';
  const details = payload.details?.trim() || '';
  const botField = (payload.botField || payload['bot-field'] || '').trim();

  if (botField) {
    return jsonResponse(400, {
      success: false,
      error: {
        code: 'SPAM_DETECTED',
        message: 'Spam protection validation failed.',
      },
    });
  }

  if (!name || !contact) {
    return jsonResponse(400, {
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Please provide both your name and contact information.',
      },
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return jsonResponse(500, {
      success: false,
      error: {
        code: 'CONFIGURATION_ERROR',
        message: 'Email service is not configured. Please try again later.',
      },
    });
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.RESEND_TO_EMAIL || 'markwindowdoorrepairspecialist@gmail.com';

  const textBody = [
    'New contact request from markwindowdoors.com',
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Location: ${location || 'Not provided'}`,
    `Details: ${details || 'Not provided'}`,
  ].join('\n');

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: contact,
        subject: `New repair request from ${name}`,
        text: textBody,
      }),
    });

    const resendPayload = await resendResponse.json().catch(() => null);
    if (!resendResponse.ok) {
      return jsonResponse(502, {
        success: false,
        error: {
          code: 'EMAIL_SEND_FAILED',
          message: 'We could not send your request right now. Please try again shortly.',
          provider: resendPayload,
        },
      });
    }

    return jsonResponse(200, {
      success: true,
      message: 'Thanks for reaching out! We will contact you to schedule your repair.',
      data: {
        id: resendPayload?.id || null,
      },
    });
  } catch (error) {
    return jsonResponse(502, {
      success: false,
      error: {
        code: 'EMAIL_SERVICE_UNAVAILABLE',
        message: 'Email service is currently unavailable. Please try again later.',
      },
    });
  }
};
