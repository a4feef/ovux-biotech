# Quick Fix: Vercel Environment Variables

## The Problem
Your Prisma schema is trying to read `DATABASE_URL` but it's not set in Vercel, OR you accidentally put the connection string directly in the schema file.

## Solution

### 1. Make Sure schema.prisma is Correct

Your `prisma/schema.prisma` line 10 should be:
```prisma
url = env("DATABASE_URL")
```

**NOT:**
```prisma
url = env("postgresql://postgres:...")
```

### 2. Add DATABASE_URL in Vercel

1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Settings** → **Environment Variables**
4. **Click "Add New"**
5. **Fill in:**
   - **Key:** `DATABASE_URL`
   - **Value:** `postgresql://postgres:Mopster@21@db.vibexkduqvflcicvcpjc.supabase.co:5432/postgres`
   - **Environment:** Check all three (Production, Preview, Development)
6. **Click "Save"**

### 3. Redeploy

After adding the environment variable:
- Vercel will automatically trigger a new deployment, OR
- Go to **Deployments** tab → Click the three dots on latest deployment → **Redeploy**

### 4. Verify Build

Check the build logs - you should see:
- ✅ Prisma schema validation passes
- ✅ Database connection works
- ✅ Build completes successfully

## Your Connection String

Based on the error, your Supabase connection string is:
```
postgresql://postgres:Mopster@21@db.vibexkduqvflcicvcpjc.supabase.co:5432/postgres
```

**⚠️ Security Warning:** This contains your password! Make sure:
- It's only in Vercel environment variables (never in code)
- Consider changing the password after setup
- Use Supabase connection pooling for better performance

## Supabase Connection Pooling (Better for Vercel)

For serverless (Vercel), use Supabase's connection pooler:

1. **In Supabase Dashboard:**
   - Go to **Settings** → **Database**
   - Scroll to **Connection Pooling**
   - Copy the **Session mode** connection string (port 5432)
   - Or use **Transaction mode** (port 6543) for better performance

2. **Update in Vercel:**
   - Replace `DATABASE_URL` value with the pooled connection string

The pooled connection string will look similar but may have different connection parameters.

## After Fixing

Once `DATABASE_URL` is set in Vercel:
1. The build should succeed
2. Your website will connect to the database
3. You may need to run migrations: `npx prisma migrate deploy` (or use Vercel CLI)


