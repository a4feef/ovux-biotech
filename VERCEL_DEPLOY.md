# Quick Vercel Deployment Guide

The easiest way to deploy your website with your Cloudflare domain.

## Prerequisites

1. GitHub account
2. Cloudflare domain
3. Free PostgreSQL database (Supabase or Neon)

## Step-by-Step

### 1. Get a PostgreSQL Database

**Option A: Supabase (Recommended)**
1. Go to [supabase.com](https://supabase.com)
2. Sign up (free)
3. Create new project
4. Go to Settings → Database
5. Copy the connection string (looks like: `postgresql://postgres:[password]@[host]:5432/postgres`)

**Option B: Neon**
1. Go to [neon.tech](https://neon.tech)
2. Sign up (free)
3. Create project
4. Copy connection string

### 2. Update Your Code for PostgreSQL

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### 3. Push to GitHub

```powershell
cd C:\Users\abire\Documents\FORECAST\ovux-biotech

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/ovux-biotech.git
git branch -M main
git push -u origin main
```

### 4. Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up** with GitHub
3. **Click "Add New Project"**
4. **Import your repository** (ovux-biotech)
5. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

6. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   DATABASE_URL = postgresql://... (from Supabase/Neon)
   NEXTAUTH_URL = https://yourdomain.com
   NEXTAUTH_SECRET = (generate with: openssl rand -base64 32)
   ADMIN_EMAIL = admin@ovuxbiotech.com
   ADMIN_PASSWORD = YourSecurePassword123!
   RATE_LIMIT_ENABLED = true
   RATE_LIMIT_MAX_REQUESTS = 100
   RATE_LIMIT_WINDOW_MS = 900000
   ```

7. **Click "Deploy"**
   - Wait 2-3 minutes
   - Vercel will build and deploy your site
   - You'll get a URL like: `ovux-biotech.vercel.app`

### 5. Connect Your Cloudflare Domain

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `ovuxbiotech.com`)
   - Click "Add"

2. **Vercel will show DNS records:**
   - Usually a CNAME record
   - Copy the target (e.g., `cname.vercel-dns.com`)

3. **In Cloudflare Dashboard:**
   - Go to your domain → DNS → Records
   - Add new record:
     - Type: `CNAME`
     - Name: `@` (or leave blank for root domain)
     - Target: `cname.vercel-dns.com` (from Vercel)
     - Proxy: ✅ Enabled (orange cloud)
     - TTL: Auto
   - Click "Save"

4. **Wait 5-30 minutes** for DNS to propagate

5. **Update NEXTAUTH_URL in Vercel:**
   - Go to Environment Variables
   - Update `NEXTAUTH_URL` to `https://yourdomain.com`
   - Redeploy (or it will auto-redeploy)

### 6. Set Up Database

1. **Run migrations:**
   ```powershell
   # In your local project
   npx prisma migrate deploy
   ```

2. **Or use Vercel CLI:**
   ```powershell
   npm install -g vercel
   vercel login
   vercel env pull .env.local
   npx prisma migrate deploy
   ```

3. **Seed database:**
   ```powershell
   npm run db:seed
   ```

### 7. Test Everything

1. Visit `https://yourdomain.com`
2. Visit `https://yourdomain.com/admin/login`
3. Login with your admin credentials
4. Test creating a product
5. Test RFQ submission

## SSL/HTTPS

- **Vercel:** Automatic SSL (free)
- **Cloudflare:** Set SSL/TLS mode to "Full" or "Full (strict)"
  - Go to Cloudflare → SSL/TLS → Overview
  - Select "Full" mode

## Troubleshooting

**"Invalid redirect URL" error:**
- Make sure `NEXTAUTH_URL` in Vercel matches your domain exactly
- Include `https://` in the URL

**Database connection error:**
- Check `DATABASE_URL` is correct
- Make sure database allows connections from Vercel IPs
- For Supabase: Check connection pooling settings

**Domain not working:**
- Wait longer for DNS propagation (up to 48 hours, usually 30 min)
- Check DNS records are correct in Cloudflare
- Make sure proxy (orange cloud) is enabled

## You're Live! 🎉

Your website should now be accessible at `https://yourdomain.com`

**Next steps:**
- Add product images
- Customize content
- Set up email notifications (optional)
- Monitor analytics



