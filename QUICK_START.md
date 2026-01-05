# Quick Start Guide

## Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js installed (see INSTALL_NODEJS.md if not)
- ✅ Created the `.env` file (or it will be created automatically)

## Automated Setup (Easiest Way)

1. **Open PowerShell** in the `ovux-biotech` folder

2. **Run the setup script:**
   ```powershell
   .\setup.ps1
   ```

   This will automatically:
   - Install all dependencies
   - Set up the database
   - Create/configure .env file
   - Seed the database

3. **Start the website:**
   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   - Website: http://localhost:3000
   - Admin: http://localhost:3000/admin/login

5. **Login:**
   - Email: `admin@ovuxbiotech.com`
   - Password: `ChangeThisPassword123!`
   - **⚠️ Change password immediately after first login!**

## Manual Setup (If Script Doesn't Work)

If the automated script fails, do these steps manually:

```powershell
# 1. Install dependencies
npm install

# 2. Create .env file (if not exists)
Copy-Item env.example .env

# 3. Set up database
npx prisma db push
npx prisma generate
npm run db:seed

# 4. Start the website
npm run dev
```

## What to Do Next

1. **Add Product Images**
   - Place images in `/public/images/`
   - See `/public/images/README.md` for required images

2. **Customize Content**
   - Edit pages in `/app/` folder
   - Update company information
   - Add real products via admin dashboard

3. **Configure Email (Optional)**
   - Add SMTP settings to `.env` for RFQ notifications

4. **Deploy to Production**
   - Switch to PostgreSQL
   - Set production environment variables
   - Build and deploy

## Common Issues

**Port 3000 already in use:**
```powershell
$env:PORT=3001; npm run dev
```

**Database errors:**
```powershell
npx prisma db push --force-reset
npm run db:seed
```

**Can't login:**
- Check `.env` file has correct `ADMIN_EMAIL` and `ADMIN_PASSWORD`
- Make sure database was seeded: `npm run db:seed`

## Need Help?

- Check `README.md` for detailed documentation
- Check `SETUP.md` for troubleshooting
- Check `INSTALL_NODEJS.md` if Node.js isn't installed


