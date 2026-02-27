# Create Admin User (First-Time Setup)

If you can't log in to the admin, the database probably was never seeded. Use one of these methods.

---

## Method 1: Run the seed against your production database (recommended)

This creates the **admin user** and the **four product categories** in your live database.

### Steps

1. **Open your project folder** (e.g. `ovux-biotech`).

2. **Point to your production database**
   - Open `.env`
   - Set `DATABASE_URL` to your **production** PostgreSQL URL (the same one Vercel uses).
   - Example (Supabase):  
     `DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.xxxx.supabase.co:5432/postgres"`
   - Keep `ADMIN_EMAIL` and `ADMIN_PASSWORD` as you want for the admin account (or leave default).

3. **Run the seed**
   ```bash
   npm run db:seed
   ```
   You should see:
   - `Created admin user: admin@ovuxbiotech.com` (or your email)
   - `Created category: Chromatography & Analytical`
   - etc.

4. **Restore `.env` if needed**
   - If you use a different `DATABASE_URL` for local development, change it back.

5. **Log in**
   - Go to **https://ovuxbiotech.com/admin/login**
   - Email: value of `ADMIN_EMAIL` (default `admin@ovuxbiotech.com`)
   - Password: value of `ADMIN_PASSWORD` (default `ChangeThisPassword123!`)

---

## Method 2: Create admin via Supabase SQL (if seed fails)

Use this only if Method 1 doesn’t work (e.g. no Node locally).

1. **Generate a password hash**
   - One option: run in Node (in your project folder):
     ```bash
     node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('YOUR_PASSWORD_HERE', 10))"
     ```
   - Replace `YOUR_PASSWORD_HERE` with the password you want (e.g. `MySecurePass123!`).
   - Copy the printed hash.

2. **Supabase Dashboard**
   - Go to **SQL Editor**.
   - Run (replace `YOUR_HASH` and email if needed):

   ```sql
   INSERT INTO "User" (id, email, password, name, role, "isActive", "createdAt", "updatedAt")
   VALUES (
     gen_random_uuid()::text,
     'admin@ovuxbiotech.com',
     'YOUR_HASH',
     'Admin User',
     'ADMIN',
     true,
     NOW(),
     NOW()
   )
   ON CONFLICT (email) DO NOTHING;
   ```

3. **Log in** at **https://ovuxbiotech.com/admin/login** with that email and password.

---

## Default credentials (from seed)

- **Email:** `admin@ovuxbiotech.com`
- **Password:** `ChangeThisPassword123!`

Change the password after first login (Admin → Users → Edit your user).
