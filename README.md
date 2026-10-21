# Rafia Eman — HR & Recruitment Portfolio

Personal portfolio for Rafia Eman, HR Executive & Recruitment Specialist (Islamabad, Pakistan).
Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and lucide icons. Fully static.

## Run locally

Requires Node 20+.

```bash
npm install
npm run dev
```

All content (experience, skills, FAQ, contact details, SEO keywords) lives in `src/lib/site.ts`.
The photo is `public/rafia-eman-hr-professional.jpg` and the downloadable CV is `public/Rafia-Eman-HR-CV.pdf`.

## SEO built in

- Keyword-targeted `<title>`, description, keywords, canonical URL, robots directives
- Open Graph + Twitter cards, with a generated 1200×630 share image (`src/app/opengraph-image.tsx`)
- JSON-LD structured data: `Person`, `ProfilePage`, `WebSite`, `FAQPage`
- `sitemap.xml` (with image sitemap), `robots.txt`, web manifest, SVG favicon
- Semantic HTML (single `h1`, labelled sections, `<time>`, `<address>`), descriptive image alt text
- Static rendering, optimized `next/image`, `next/font` for fast Core Web Vitals

## Getting it ranking on Google

The code handles on-page SEO; ranking also depends on things outside the code:

1. **Deploy** on Vercel and connect a custom domain (e.g. `rafiaeman.com`).
2. Set `NEXT_PUBLIC_SITE_URL` to that domain (see `.env.example`).
3. Add the site to **Google Search Console**, put the verification code in
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then submit `https://<domain>/sitemap.xml`.
4. Put the portfolio link on **LinkedIn** (Contact info + Featured), Rozee.pk, Indeed and the CV —
   these backlinks are what connect "Rafia Eman" searches to the site.
5. Optionally add a Google Business Profile or blog posts on HR topics to target broader HR searches.
