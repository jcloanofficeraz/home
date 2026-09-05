# JC Loan Officer — Homepage

Homepage for Johnny Calderón, Mortgage Loan Officer (Efinity Mortgage, NMLS #2467937), serving Arizona and Texas. Static site, no build step, ready for GitHub Pages.

## Project structure

```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/     ← upload real photos here (filenames noted below)
│   └── icons/      ← favicon.ico, favicon.svg, apple-touch-icon.png
├── robots.txt
├── sitemap.xml
└── README.md
```

This matches the suggested structure from the brief exactly — no changes needed for GitHub Pages, since Pages serves static files directly from the repo root.

## Deploying to GitHub Pages with a custom domain

1. Push this folder to a GitHub repository (e.g. `jcloanofficer-site`).
2. In the repo, go to **Settings → Pages**, set the source to the `main` branch, root folder.
3. Add a file named `CNAME` at the repo root containing exactly: `jcloanofficer.com`
4. At your domain registrar, point DNS at GitHub Pages:
   - Four `A` records for the apex domain to GitHub's IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - A `CNAME` record for `www` pointing to `<your-github-username>.github.io`
5. Back in **Settings → Pages**, enter `jcloanofficer.com` as the custom domain and enable **Enforce HTTPS** once DNS has propagated.
6. Repeat with a separate repository (or a `/es` path, if you prefer a subfolder instead of a subdomain) for `es.jcloanofficer.com`.

## Design decisions

- **Palette**: warm off-white background with a muted deep-navy accent, chosen to read as calm and trustworthy rather than "fintech." No dark theme, no gradients, per the brief.
- **Type**: Plus Jakarta Sans for headlines (a display-worthy but non-decorative sans) paired with Inter for body copy — two clearly distinct roles, not a single default font stack.
- **Structure over decoration**: hairline 1px borders instead of drop shadows or heavy rounded cards, so the page reads as considered rather than templated.
- **No fabricated content**: no testimonials, stats, years-of-experience, guarantees, or office address appear anywhere. Every placeholder is explicitly labeled.
- **Loan programs are summarized, not explained** on the homepage — each links out to a dedicated program page, keeping this page focused on the broad "mortgage loan officer in Arizona & Texas" intent.

## Image placeholders to fill in

| Filename | Used in | Aspect ratio | Suggested alt text |
|---|---|---|---|
| `johnny-calderon-mortgage-loan-officer.jpg` | Hero | 4:5 | "Johnny Calderón, mortgage loan officer serving Arizona and Texas." |
| `johnny-calderon-with-homebuyer.jpg` | Why Work With Me | 5:4 | "Johnny Calderón reviewing home loan options with a client." |
| `favicon.svg` / `favicon.ico` / `apple-touch-icon.png` | Header / browser tab | 1:1 | n/a |
| `og-cover.jpg` | Social share preview (Open Graph / Twitter) | 1.91:1 (1200×630) | n/a (social preview image) |

Drop finished files into `assets/images/` and `assets/icons/` using these exact names — no HTML changes needed.

## Checklist — information still needed from you

- [ ] Confirm current Texas licensing status (site currently displays "Arizona & Texas" per your brief — remove Texas references if licensing isn't active yet)
- [ ] Efinity Mortgage's company NMLS ID (used in the Organization structured data — currently a placeholder)
- [ ] Phone number for the footer
- [ ] Email address for the footer
- [ ] Social media URLs (Instagram, TikTok, Facebook, etc.)
- [ ] Calendly (or other scheduling) URL for "Book a Call" / "Book a Consultation" links — currently pointing to a placeholder `/book-a-call.html` page
- [ ] Contact form endpoint, if you want a form on `/contact.html` instead of just a scheduling link
- [ ] Final photos for the two image placeholders above
- [ ] Privacy Policy and Terms of Use content (footer links currently point to pages that don't exist yet)

## Future pages to build (already linked from the homepage)

- `/loans/fha.html`, `/loans/conventional.html`, `/loans/va.html`, `/loans/usda.html`, `/loans/down-payment-assistance.html`, `/loans/construction.html`, `/loans/itin.html`
- `/buying-a-home.html`
- `/resources.html` plus individual articles: `/resources/how-mortgage-rates-work.html`, `/resources/fha-vs-conventional.html`, `/resources/down-payment-assistance-explained.html`
- `/about.html`
- `/book-a-call.html`
- `/contact.html`
- `/refinance.html`
- `/privacy-policy.html`, `/terms-of-use.html`, `/accessibility.html`

Add each page's URL to `sitemap.xml` as it goes live (the entries are already drafted there, commented out).

## Review pass notes

- **First-time buyer**: the "Start with your goal" and "First-Time Home Buyers" sections give a direct path in without needing to read the whole page.
- **Spanish-speaking borrower**: language switcher is in the header (desktop and mobile) and links to `es.jcloanofficer.com`; that Spanish homepage still needs to be built separately.
- **Self-employed / ITIN borrower**: both are represented as explicit entry points ("Explore ITIN Home Loans") rather than buried in a general FAQ.
- **Down payment assistance seeker**: appears in three places (goal grid, loan programs grid, first-time buyer panel) without being repeated word-for-word.
- **Google crawler**: single H1, descending heading hierarchy, descriptive link text throughout (no bare "click here" / "learn more" without context), JSON-LD for Person/Organization/WebSite, canonical + hreflang + OG/Twitter tags in place.
- **Mobile user**: hero stacks to a single column, nav collapses to a slide-down menu with a separate Loans submenu, all tap targets are ≥44px, no horizontal scroll at any breakpoint tested (360px–1920px equivalent).
