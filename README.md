# Inteliment.com — Decision Intelligence & AI Solutions

React 18 + Vite SPA for Inteliment's marketing and lead-generation site.

---

## Stack

| Layer | Technology |
|---|---|
| UI | React 18, Vite 5 |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 + custom plugin |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| SEO | React Helmet Async |
| Icons | Lucide React |
| Serve | Nginx (Docker) |

---

## Local Development

**Prerequisites:** Node 18+, npm 9+

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server (http://localhost:5173)
npm run dev

# Lint
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Production Build

```bash
npm run build
# Output: dist/
```

The build produces:
- `dist/index.html` — SPA entry point
- `dist/assets/` — hashed JS/CSS chunks (vendor / motion / charts / per-page)

---

## Docker

### Build & run (single container)

```bash
docker build -t inteliment-web .
docker run -p 80:80 inteliment-web
```

### Docker Compose

```bash
# Production (port 80)
docker-compose up -d

# Development with hot-reload (port 5173)
docker-compose --profile dev up dev
```

---

## EC2 / Bare-metal Deploy (Ubuntu 22.04)

### 1. Install Node 18

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Install Nginx

```bash
sudo apt-get install -y nginx
```

### 3. Build the site

```bash
git clone <repo> /var/www/inteliment
cd /var/www/inteliment
npm install --legacy-peer-deps
npm run build
```

### 4. Configure Nginx

```bash
sudo cp nginx.conf /etc/nginx/nginx.conf
# Edit server_name to your domain
sudo nginx -t
sudo systemctl restart nginx
```

### 5. SSL with Certbot

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d inteliment.com -d www.inteliment.com
```

---

## Zoho Integration Checklist

All Zoho touchpoints are marked with `// TODO: Zoho` comments. Complete before going live:

### Zoho PageSense (Analytics & Heatmaps)

1. Sign in to Zoho PageSense → **Settings → Tracking Code**
2. Copy snippet and replace the placeholder comment in `index.html` just before `</head>`

### Zoho SalesIQ (Live Chat)

1. Sign in to Zoho SalesIQ → **Settings → Websites → Embed Code**
2. Add widget snippet to `index.html` just before `</body>`

### Zoho CRM (Lead Capture)

Four files contain `// TODO: Zoho CRM` stubs:

| File | Form |
|---|---|
| `src/components/interactive/MaturityAssessment.jsx` | Assessment lead form |
| `src/pages/Contact.jsx` | Project intake form |
| `src/pages/Contact.jsx` | Partnership form |

Replace each stub with a `fetch` POST to your Web-to-Lead endpoint:

```js
await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    xnQsjsdp: '<YOUR_ORG_ID>',
    xmIwtLD: '<YOUR_FORM_ID>',
    actionType: 'TGVhZHM=',
    'Last Name': data.name,
    Email: data.email,
    Company: data.company,
  }),
});
```

Get your org/form IDs from **Zoho CRM → Modules → Leads → Web Forms → Edit → Source Code**.

---

## Project Structure

```
inteliment.com/
├── public/
│   ├── favicon.svg
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/           # Button, GlassCard, SectionHeading, Badge, …
│   │   ├── layout/       # Navbar, Footer, PageLayout
│   │   ├── sections/     # HeroSection, TrustBar, IndustryGrid, CTABanner, …
│   │   └── interactive/  # DIFramework, CapabilityMatrix, MaturityAssessment,
│   │                     # ROICalculator, ACEConfigurator
│   ├── data/             # solutions, industries, platforms, team,
│   │                     # impactStories, assessmentQuestions, articles
│   ├── hooks/            # useScrollReveal, useAnimatedCounter,
│   │                     # useUTMParams, useScrollPosition
│   ├── pages/            # One file per route
│   ├── utils/            # seo.js, scoring.js
│   ├── styles/globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.js
├── nginx.conf
├── Dockerfile
├── docker-compose.yml
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Environment Variables

No env vars are required for the static build. To add keys, create `.env.local`:

```
VITE_ZOHO_CRM_ORG_ID=...
VITE_GA_MEASUREMENT_ID=...
```

Access in code via `import.meta.env.VITE_*`.

---

## Performance Budget

| Chunk | Target |
|---|---|
| vendor (React/Router) | < 150 kB gzip |
| motion (Framer Motion) | < 60 kB gzip |
| charts (Recharts) | < 60 kB gzip |
| Per-page chunks | < 30 kB gzip each |

Run `npx vite-bundle-visualizer` after build to inspect chunk sizes.
# inteliment
