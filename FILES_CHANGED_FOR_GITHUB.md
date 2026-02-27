# Files to Add to GitHub (Changes Made)

Use this list to stage and commit all changes. Run these commands from the **ovux-biotech** folder.

---

## Quick command (add everything)

```bash
cd ovux-biotech
git add .
git status
git commit -m "Content and config updates: logo, compliance, admin setup, migrations"
git push
```

---

## File list (for reference)

### Modified files
| File | What changed |
|------|----------------|
| `components/Navbar.tsx` | Removed large logo image; show only small icon + text "Ovux Biotech Solutions" |
| `app/about/page.tsx` | Updated Compliance Statement text |
| `app/chromatography/page.tsx` | Removed "Understanding OEM Restrictions" section |
| `app/layout.tsx` | Favicon/icons point to `/logo/ovux-icon.png` |
| `components/admin/AdminHeader.tsx` | Logo icon in admin header |
| `app/globals.css` | Logo fallback CSS (if still present) |
| `prisma/schema.prisma` | SQLite compatibility (enums → strings, @db.Text removed); or PostgreSQL for production |
| `package.json` | Build script: `prisma migrate deploy` added before `next build` |
| `prisma/seed.ts` | Creates admin user + 4 categories |

### New files / folders
| Path | Purpose |
|------|---------|
| `prisma/migrations/` | Database migration files (e.g. `0_init/migration.sql`, `migration_lock.toml`) |
| `CREATE_ADMIN.md` | How to create admin user (seed or SQL) |
| `ADD_LOGO_INSTRUCTIONS.md` | How to add logo files |
| `CLOUDFLARE_SETUP.md` | Connect Cloudflare domain |
| `VERCEL_DEPLOY.md` | Deploy to Vercel |
| `VERCEL_ENV_SETUP.md` | Fix env / Prisma schema |
| `DEPLOY_TO_CLOUDFLARE.md` | Deployment options |
| `FIX_VERCEL_ERROR.md` | Prisma DATABASE_URL fix |
| `DEPLOYMENT_FIXED.md` | Migration baseline notes |
| `public/logo/README.md` | Logo folder instructions |
| `public/logo/ADD_LOGO_HERE.md` | Where to put logo files |
| `public/images/README.md` | Product images list (already there) |

### You added (not in repo by default)
- `public/logo/ovux-logo.png`
- `public/logo/ovux-icon.png`
- `public/images/*.jpg` (hero, hplc-column, etc.)
- `.env` (do **not** commit; keep only in Vercel / local)

---

## Optional: add only specific changes

```bash
cd ovux-biotech

# Code and config
git add components/Navbar.tsx
git add components/admin/AdminHeader.tsx
git add app/layout.tsx
git add app/about/page.tsx
git add app/chromatography/page.tsx
git add app/globals.css
git add prisma/schema.prisma
git add prisma/seed.ts
git add prisma/migrations/
git add package.json

# Docs
git add CREATE_ADMIN.md
git add ADD_LOGO_INSTRUCTIONS.md
git add CLOUDFLARE_SETUP.md
git add VERCEL_DEPLOY.md
git add *.md

# Logo folder (readme only; add images if you want them in repo)
git add public/logo/*.md

git status
git commit -m "Your message"
git push
```

---

**Important:** Do **not** run `git add .env` — keep secrets out of GitHub. Vercel env vars are set in the Vercel dashboard.
