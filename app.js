const { createApp } = Vue;

createApp({
  data() {
    return {
      facebookUrl: 'https://www.facebook.com/p/Marks-Window-and-Doors-Repair-Specialist-100090305083564/',
      email: 'info@markswindowanddoors.com',
      experienceYears: 15,
      highlights: [
        { icon: '🛠️', title: 'Skilled repairs', copy: 'From sticky sliders to drafty frames, we fix the cause—not just the symptom.' },
        { icon: '🚚', title: 'On-site service', copy: 'We come equipped with the right parts and tools to keep your day moving.' },
        { icon: '👍', title: 'Clean, friendly care', copy: 'Transparent estimates, tidy workspaces, and respect for your home.' },
      ],
      repairs: [
        'Foggy or cracked glass',
        'Drafts and failing seals',
        'Roller, track, and hinge issues',
        'Sliding door alignment',
        'Locksets and hardware updates',
        'Screen replacement',
      ],
      services: [
        {
          icon: '🪟',
          title: 'Window repairs & tune-ups',
          copy: 'Re-seal, re-square, and refresh windows to improve insulation and smooth operation.',
          details: ['Recaulking and sealing', 'Balance and sash adjustments', 'Hardware replacement', 'Energy-efficiency checks'],
        },
        {
          icon: '🚪',
          title: 'Patio & entry doors',
          copy: 'Restore quiet, secure doors with smooth glides and reliable locks that stand up to daily use.',
          details: ['Roller and track repairs', 'Soft-close and glide tuning', 'Weatherstripping replacements', 'Handle and lock upgrades'],
        },
        {
          icon: '🧰',
          title: 'Emergency fixes',
          copy: 'Quick help for cracked panes, stuck doors, and leaks that can’t wait for later.',
          details: ['Temporary board-ups', 'Leak mitigation', 'Hardware stabilization', 'Follow-up replacement plans'],
        },
      ],
      projects: [
        {
          type: 'Sliding door refresh',
          title: 'Patio slider restored to a one-hand glide',
          copy: 'Replaced worn rollers, cleaned tracks, and installed new weatherstripping for a quiet, secure close.',
          image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
        },
        {
          type: 'Window re-seal',
          title: 'Stopped drafts in a sunny living room bay',
          copy: 'Re-caulked perimeter seals and balanced the sashes to eliminate cold spots and rattling.',
          image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80&sat=-20',
        },
        {
          type: 'Front entry tune-up',
          title: 'Solid, quiet entry with refreshed hardware',
          copy: 'Adjusted hinges, replaced a tired latch, and added new weatherstripping to reduce street noise.',
          image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
        },
      ],
      testimonials: [
        { quote: 'Mark walked me through every repair option and left the workspace spotless.', author: 'Janelle P.', meta: 'Patio door alignment & rollers' },
        { quote: 'Our windows finally seal tight—no more drafts. Great communication start to finish.', author: 'Chris L.', meta: 'Window re-sealing' },
        { quote: 'Fast response and the sliding door glides like new again. Highly recommend!', author: 'David R.', meta: 'Hardware refresh' },
      ],
      form: {
        name: '',
        contact: '',
        location: '',
        details: '',
        botField: '',
      },
      confirmation: '',
      formError: '',
      isSubmitting: false,
    };
  },
  methods: {
    encodeFormData(data) {
      return new URLSearchParams(data).toString();
    },
    async submitForm() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;
      this.confirmation = '';
      this.formError = '';

      try {
        const payload = {
          'form-name': 'contact',
          ...this.form,
        };

        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encodeFormData(payload),
        });

        this.confirmation = 'Thanks for reaching out! We will contact you to schedule your repair.';
        this.form = { name: '', contact: '', location: '', details: '', botField: '' };
      } catch (error) {
        this.formError = 'Something went wrong sending your request. Please try again or message us on Facebook.';
      } finally {
        this.isSubmitting = false;
      }
    },
  },
}).mount('#app');
