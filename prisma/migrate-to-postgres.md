# Migrating from SQLite to PostgreSQL

If you've been developing with SQLite and need to switch to PostgreSQL for production.

## Quick Migration Steps

### 1. Get PostgreSQL Database

Sign up for free at:
- [Supabase](https://supabase.com) - Recommended
- [Neon](https://neon.tech)
- [Railway](https://railway.app)

Get your connection string (looks like):
```
postgresql://user:password@host:5432/database
```

### 2. Update Prisma Schema

The schema is already compatible! Just update the datasource:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### 3. Update Environment Variable

In your `.env` file:
```env
DATABASE_URL="postgresql://user:password@host:5432/database"
```

### 4. Push Schema to PostgreSQL

```powershell
npx prisma db push
```

This will create all tables in PostgreSQL.

### 5. Migrate Data (Optional)

If you have data in SQLite you want to keep:

1. Export from SQLite:
   ```powershell
   # Install sqlite3 if needed
   sqlite3 dev.db .dump > backup.sql
   ```

2. Import to PostgreSQL (requires manual conversion or use a tool)

Or just re-seed:
```powershell
npm run db:seed
```

### 6. Generate Prisma Client

```powershell
npx prisma generate
```

### 7. Test Connection

```powershell
npx prisma studio
```

This should open Prisma Studio connected to your PostgreSQL database.

## For Production Deployment

When deploying to Vercel/Railway/etc:

1. Add `DATABASE_URL` environment variable with your PostgreSQL connection string
2. Run migrations:
   ```powershell
   npx prisma migrate deploy
   ```
3. Seed database:
   ```powershell
   npm run db:seed
   ```

## Connection String Formats

**Supabase:**
```
postgresql://postgres:[PASSWORD]@[PROJECT_REF].supabase.co:5432/postgres
```

**Neon:**
```
postgresql://[user]:[password]@[host]/[database]?sslmode=require
```

**Railway:**
```
postgresql://postgres:[password]@[host]:[port]/railway
```

## Important Notes

- PostgreSQL supports everything SQLite does, plus more
- Enums work in PostgreSQL (we converted them to strings for SQLite compatibility)
- Text fields work the same
- All your existing code will work without changes



