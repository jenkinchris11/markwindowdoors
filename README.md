# Mark's Window & Doors Repair Specialist website

A single-page Vue-powered marketing site for **Mark's Window and Doors Repair Specialist**, featuring services, recent projects, testimonials, and contact options linked to the business Facebook page.

## Running the site
Open `index.html` directly in your browser or serve the directory locally:

```bash
python -m http.server 4173
# then browse to http://localhost:4173
```

## Contact form flow
The contact form submits JSON to a Netlify Function at `/.netlify/functions/contact`.

- Frontend sends: `name`, `contact`, `location`, `details`, and `botField`.
- Backend validates required fields (`name` and `contact`) and rejects submissions if the honeypot (`botField`/`bot-field`) is populated.
- Valid requests are forwarded to Resend for email delivery.

## Deploying to Netlify
This site is ready for a static Netlify deploy with serverless form handling:

1. Push the repository to GitHub.
2. In Netlify, select **Add new site** → **Import an existing project** and connect your repo.
3. Leave the build command empty and set the publish directory to `.` (the repo root).
4. Add these environment variables in **Site configuration → Environment variables**:
   - `RESEND_API_KEY` (required): API key used to send emails through Resend.
   - `RESEND_FROM_EMAIL` (recommended): verified sender email/domain configured in Resend.
   - `RESEND_TO_EMAIL` (recommended): recipient inbox for incoming contact requests.
5. Deploy. Netlify will serve the static site and run `netlify/functions/contact.js` for form submissions.
