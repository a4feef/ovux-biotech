# Deploying to Cloudflare Domain

This guide will help you deploy your Ovux Biotech Solutions website to production using your Cloudflare domain.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy Next.js apps and works great with Cloudflare domains.

### Step 1: Prepare for Production

1. **Switch to PostgreSQL** (SQLite won't work in production):
   - Sign up for a free PostgreSQL database at [Supabase](https://supabase.com) or [Neon](https://neon.tech)
   - Get your database connection string

2. **Update Prisma Schema:**
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. **Update your `.env` file:**
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/database"
   NEXTAUTH_URL="https://yourdomain.com"
   NEXTAUTH_SECRET="your-secure-secret-here"
   ```

### Step 2: Deploy to Vercel

1. **Push your code to GitHub:**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ovux-biotech.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `DATABASE_URL` - Your PostgreSQL connection string
     - `NEXTAUTH_URL` - `https://yourdomain.com`
     - `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
     - `ADMIN_EMAIL` - Your admin email
     - `ADMIN_PASSWORD` - Your admin password
   - Click "Deploy"

3. **Configure Custom Domain:**
   - In Vercel dashboard, go to your project → Settings → Domains
   - Add your Cloudflare domain (e.g., `ovuxbiotech.com`)
   - Vercel will give you DNS records to add

### Step 3: Configure Cloudflare DNS

1. **Log into Cloudflare Dashboard**
2. **Select your domain**
3. **Go to DNS → Records**
4. **Add the DNS records Vercel provided:**
   - Usually a CNAME record pointing to `cname.vercel-dns.com`
   - Or A records if Vercel provides IP addresses

5. **SSL/TLS Settings:**
   - Go to SSL/TLS → Overview
   - Set to "Full" or "Full (strict)"
   - This ensures HTTPS works properly

6. **Wait for DNS propagation** (usually 5-30 minutes)

### Step 4: Update Environment Variables

After domain is connected, update in Vercel:
- `NEXTAUTH_URL` should be `https://yourdomain.com`

## Option 2: Deploy to Cloudflare Pages

Cloudflare Pages can host Next.js apps directly.

### Step 1: Build Configuration

Create `wrangler.toml` in your project root:
```toml
name = "ovux-biotech"
compatibility_date = "2024-01-01"
```

### Step 2: Deploy

1. **Install Wrangler CLI:**
   ```powershell
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```powershell
   wrangler login
   ```

3. **Deploy:**
   ```powershell
   npm run build
   wrangler pages deploy .next
   ```

**Note:** Cloudflare Pages has limitations with Next.js API routes. You may need to use Cloudflare Workers for API routes.

## Option 3: Deploy to Railway/Render (Alternative)

These platforms are easier than self-hosting but more flexible than Vercel.

### Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project → Deploy from GitHub
4. Add PostgreSQL database
5. Set environment variables
6. Railway will give you a domain, or connect your Cloudflare domain

### Render

1. Go to [render.com](https://render.com)
2. Sign up
3. Create new Web Service
4. Connect GitHub repository
5. Add PostgreSQL database
6. Set environment variables
7. Connect custom domain

## Important: Production Checklist

Before going live, make sure:

- [ ] **Database is PostgreSQL** (not SQLite)
- [ ] **NEXTAUTH_SECRET** is a strong random string
- [ ] **ADMIN_PASSWORD** is changed from default
- [ ] **NEXTAUTH_URL** matches your domain exactly
- [ ] **SSL/HTTPS** is enabled (Cloudflare handles this)
- [ ] **Environment variables** are set in your hosting platform
- [ ] **Database migrations** are run: `npx prisma migrate deploy`
- [ ] **Product images** are uploaded
- [ ] **Test the admin login** works
- [ ] **Test RFQ submission** works

## DNS Configuration Examples

### For Vercel (CNAME):
```
Type: CNAME
Name: @ (or www)
Target: cname.vercel-dns.com
Proxy: ✅ (orange cloud enabled)
```

### For Custom Server (A Record):
```
Type: A
Name: @
Target: YOUR_SERVER_IP
Proxy: ✅
```

## Troubleshooting

**Domain not connecting:**
- Check DNS records are correct
- Wait 30 minutes for propagation
- Check Cloudflare proxy is enabled (orange cloud)

**SSL errors:**
- Set Cloudflare SSL/TLS to "Full" or "Full (strict)"
- Make sure your hosting platform has SSL enabled

**Database connection errors:**
- Check DATABASE_URL is correct
- Make sure database allows connections from your hosting IP
- For Supabase/Neon, check connection pooling settings

**NextAuth not working:**
- NEXTAUTH_URL must match your domain exactly (with https://)
- NEXTAUTH_SECRET must be set
- Check browser console for errors

## Recommended Setup

**Best for beginners:**
1. Vercel (hosting) + Supabase (database) + Cloudflare (domain)
2. All have free tiers
3. Easy to set up
4. Automatic SSL

**Need help?** Check the main README.md or contact support.

