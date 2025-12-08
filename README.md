# Mark's Window & Doors Repair Specialist website

A single-page Vue-powered marketing site for **Mark's Window and Doors Repair Specialist**, featuring services, recent projects, testimonials, and contact options linked to the business Facebook page.

## Running the site
Open `index.html` directly in your browser or serve the directory locally:

```bash
python -m http.server 4173
# then browse to http://localhost:4173
```

## Deploying to Netlify
This site is ready for a static Netlify deploy:

1. Push the repository to GitHub.
2. In Netlify, select **Add new site** → **Import an existing project** and connect your repo.
3. Leave the build command empty and set the publish directory to `.` (the repo root).
4. Deploy. All routes will redirect to `index.html` and the contact form will be captured by Netlify Forms automatically.
