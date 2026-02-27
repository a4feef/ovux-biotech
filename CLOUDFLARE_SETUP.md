# Cloudflare Dashboard Setup Guide

Step-by-step instructions for connecting your Cloudflare domain to Vercel.

## Prerequisites

- ✅ Your website is deployed on Vercel
- ✅ Vercel has given you DNS records to add
- ✅ Your domain is already added to Cloudflare

## Step-by-Step Instructions

### Step 1: Get DNS Records from Vercel

1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Go to Settings → Domains**
4. **Add your domain** (e.g., `ovuxbiotech.com` or `www.ovuxbiotech.com`)
5. **Vercel will show you DNS records** - Copy these!

You'll typically see one of these:

**Option A: CNAME Record (Most Common)**
```
Type: CNAME
Name: @ (or www)
Target: cname.vercel-dns.com
```

**Option B: A Records**
```
Type: A
Name: @
Target: 76.76.21.21 (example IP)
```

### Step 2: Configure DNS in Cloudflare

1. **Log into Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)

2. **Select Your Domain**
   - Click on your domain name from the list

3. **Go to DNS → Records**
   - Click "DNS" in the left sidebar
   - Click "Records" tab

4. **Add the DNS Record**

   **For CNAME (Recommended):**
   - Click **"Add record"** button
   - **Type:** Select `CNAME`
   - **Name:** 
     - For root domain: Enter `@` or leave blank
     - For www: Enter `www`
   - **Target:** Enter what Vercel gave you (e.g., `cname.vercel-dns.com`)
   - **Proxy status:** Click the orange cloud ☁️ to enable (IMPORTANT!)
   - **TTL:** Leave as "Auto"
   - Click **"Save"**

   **For A Records:**
   - Click **"Add record"** button
   - **Type:** Select `A`
   - **Name:** Enter `@` or leave blank
   - **IPv4 address:** Enter the IP Vercel provided
   - **Proxy status:** Click the orange cloud ☁️ to enable
   - **TTL:** Leave as "Auto"
   - Click **"Save"**

### Step 3: Remove Conflicting Records

If you have existing records pointing elsewhere:
- **Delete or disable** any old A or CNAME records for your domain
- Keep only the new Vercel record

### Step 4: Configure SSL/TLS Settings

1. **Go to SSL/TLS** in left sidebar
2. **SSL/TLS encryption mode:**
   - Select **"Full"** or **"Full (strict)"** (recommended)
   - This ensures HTTPS works properly with Vercel
3. **Click "Save"**

### Step 5: Wait for DNS Propagation

- **Usually takes:** 5-30 minutes
- **Can take up to:** 48 hours (rare)
- **Check status:** Vercel dashboard will show "Valid Configuration" when ready

### Step 6: Verify It's Working

1. **Check Vercel Dashboard:**
   - Go to Settings → Domains
   - Should show "Valid Configuration" ✅

2. **Test Your Domain:**
   - Visit `https://yourdomain.com` in browser
   - Should load your website!

## Common Cloudflare Settings

### SSL/TLS Settings (Recommended)

**SSL/TLS encryption mode:**
- ✅ **Full (strict)** - Best option, requires valid SSL on Vercel
- ✅ **Full** - Good option, works with self-signed certs
- ❌ **Flexible** - Not recommended (less secure)

**Always Use HTTPS:**
- Enable this setting (redirects HTTP to HTTPS)

### Speed Settings (Optional)

**Auto Minify:**
- Can enable JavaScript, CSS, HTML minification
- Usually not needed (Vercel handles this)

**Brotli:**
- Enable for better compression

### Caching (Optional)

**Caching Level:**
- Set to "Standard" (default is fine)

**Browser Cache TTL:**
- 4 hours is good default

## Troubleshooting

### Domain Not Connecting

**Check:**
1. DNS record is correct (exact match from Vercel)
2. Proxy (orange cloud) is enabled
3. Waited at least 30 minutes
4. No conflicting DNS records

**Fix:**
- Double-check the target/IP from Vercel
- Make sure proxy is ON (orange cloud, not gray)
- Delete and recreate the DNS record

### SSL/HTTPS Not Working

**Check:**
1. SSL/TLS mode is "Full" or "Full (strict)"
2. "Always Use HTTPS" is enabled
3. Vercel has SSL enabled (it does by default)

**Fix:**
- Set SSL/TLS to "Full (strict)"
- Enable "Always Use HTTPS"
- Wait a few minutes for changes to propagate

### "Invalid Configuration" in Vercel

**Check:**
1. DNS record matches exactly what Vercel shows
2. Proxy is enabled (orange cloud)
3. Record type is correct (CNAME vs A)

**Fix:**
- Delete the DNS record
- Re-add it exactly as Vercel shows
- Make sure proxy is enabled

### Website Shows Cloudflare Error Page

**This means:**
- DNS is working but Cloudflare can't reach Vercel
- Usually SSL/TLS mode issue

**Fix:**
- Set SSL/TLS to "Full" (not "Flexible")
- Check Vercel domain settings

## Visual Guide

### DNS Record Example (CNAME)

```
┌─────────────────────────────────────┐
│ Type:     CNAME                      │
│ Name:     @                          │
│ Target:   cname.vercel-dns.com       │
│ Proxy:    ☁️ Proxied (Orange)       │
│ TTL:      Auto                       │
└─────────────────────────────────────┘
```

### SSL/TLS Settings

```
┌─────────────────────────────────────┐
│ SSL/TLS encryption mode:            │
│ ○ Off                               │
│ ○ Flexible                          │
│ ● Full                              │ ← Select this
│ ○ Full (strict)                     │ ← Or this
└─────────────────────────────────────┘
```

## Quick Checklist

- [ ] Got DNS records from Vercel
- [ ] Added DNS record in Cloudflare (CNAME or A)
- [ ] Enabled proxy (orange cloud ☁️)
- [ ] Set SSL/TLS to "Full" or "Full (strict)"
- [ ] Removed old/conflicting DNS records
- [ ] Waited 30 minutes for propagation
- [ ] Verified domain works in browser
- [ ] Vercel shows "Valid Configuration"

## After Setup

Once your domain is connected:

1. **Update NEXTAUTH_URL in Vercel:**
   - Go to Vercel → Settings → Environment Variables
   - Update `NEXTAUTH_URL` to `https://yourdomain.com`
   - Redeploy

2. **Test Everything:**
   - Visit your domain
   - Test admin login
   - Test RFQ submission
   - Check HTTPS is working

3. **Optional: Add www subdomain:**
   - Add another CNAME record:
     - Name: `www`
     - Target: `cname.vercel-dns.com`
     - Proxy: Enabled

## You're Done! 🎉

Your domain should now be connected and working!

If you run into issues, check the troubleshooting section above.


