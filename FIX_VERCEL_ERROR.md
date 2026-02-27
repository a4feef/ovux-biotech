# Fix Vercel Deployment Error

## The Problem

Your `schema.prisma` file on Vercel has the connection string hardcoded:
```prisma
url = env("postgresql://postgres:Mopster@21@db.vibexkduqvflcicvcpjc.supabase.co:5432/postgres")
```

This is **WRONG**. The `env()` function should only contain the environment variable name.

## The Fix

### Step 1: Fix schema.prisma

Make sure line 10 in `prisma/schema.prisma` looks like this:
```prisma
url = env("DATABASE_URL")
```

NOT:
```prisma
url = env("postgresql://postgres:...")
```

### Step 2: Add Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `DATABASE_URL`
   - **Value:** `postgresql://postgres:Mopster@21@db.vibexkduqvflcicvcpjc.supabase.co:5432/postgres`
   - **Environment:** Select all (Production, Preview, Development)
4. Click **Save**

### Step 3: Commit and Push

Make sure your `schema.prisma` is correct locally, then:

```powershell
git add prisma/schema.prisma
git commit -m "Fix Prisma schema - use DATABASE_URL env variable"
git push
```

Vercel will automatically redeploy.

### Step 4: Verify

After deployment, check:
- Build logs should show no Prisma errors
- Website should load without database errors

## Important Security Note

⚠️ **Your database password is visible in the error message!**

After fixing this, consider:
1. Changing your Supabase database password
2. Using Supabase connection pooling (recommended for serverless)
3. Never commit connection strings to git

## Supabase Connection Pooling (Recommended)

For Vercel/serverless, use Supabase's connection pooler:

1. In Supabase dashboard → Settings → Database
2. Find "Connection Pooling" section
3. Use the "Session" mode connection string (port 5432)
4. Or use "Transaction" mode (port 6543) for better performance

The connection string format will be different - Supabase will show you the correct one.


