# automationwise-site (Vue + Vite + GitHub Pages)

Single-page site that renders a Markdown brief via Vue. Push to `main`;

GitHub Actions builds and deploys to Pages. 

The Markdown brief is the source of truth.

## Local dev
```bash
npm ci
npm run dev
# open http://localhost:5173
```

## Build
```bash
npm run build
# outputs ./dist
```

## Deploy (GitHub Pages)
- This repo ships with a Pages workflow (`.github/workflows/deploy.yml`).
- The `public/CNAME` file sets the custom domain: `automationwise.com`.
- In GitHub: **Settings → Pages** → Deployment source: **GitHub Actions**.
- DNS: add a **CNAME** record for `automationwise.com` → `automationwise.github.io`.

## Editing the brief
Edit `src/content/brief.md` and push. The site rebuilds automatically.

## Subpath deploys (without a custom domain)
If you deploy at `https://<user>.github.io/<repo>/`, set `base: '/<repo>/'` in `vite.config.ts`.
