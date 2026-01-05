# Setup Instructions

## Quick Start Guide

Follow these steps to get the Ovux Biotech Solutions website running locally.

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Environment

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and set:
   - `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `ADMIN_EMAIL` - Your admin email
   - `ADMIN_PASSWORD` - Your admin password (change after first login!)

### Step 3: Initialize Database

```bash
# Create database and tables
npx prisma db push

# Generate Prisma client
npx prisma generate

# Seed database with initial data
npm run db:seed
```

### Step 4: Add Product Images

Place synthetic product images in `/public/images/`:
- `hero-lab-equipment.jpg`
- `hplc-column.jpg`
- `gc-column.jpg`
- `lab-glassware.jpg`
- `lab-equipment.jpg`
- `pharma-accessories.jpg`

See `/public/images/README.md` for details.

### Step 5: Start Development Server

```bash
npm run dev
```

### Step 6: Access the Application

- **Public Website:** http://localhost:3000
- **Admin Login:** http://localhost:3000/admin/login

Use the credentials from your `.env` file to log in.

## First Login

1. Go to http://localhost:3000/admin/login
2. Enter your admin email and password from `.env`
3. **IMPORTANT:** Change your password immediately after first login!

## Troubleshooting

### Database Issues

If you encounter database errors:
```bash
# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset

# Re-seed
npm run db:seed
```

### Port Already in Use

If port 3000 is in use:
```bash
# Use a different port
PORT=3001 npm run dev
```

### Missing Images

If images don't load:
1. Check that images exist in `/public/images/`
2. Verify image filenames match the code
3. Check browser console for 404 errors

## Production Deployment

### 1. Switch to PostgreSQL

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### 2. Set Production Environment Variables

- Use a strong `NEXTAUTH_SECRET`
- Set `NEXTAUTH_URL` to your production domain
- Use a secure `ADMIN_PASSWORD`
- Configure `DATABASE_URL` for PostgreSQL

### 3. Run Migrations

```bash
npx prisma migrate deploy
```

### 4. Build and Deploy

```bash
npm run build
npm start
```

## Next Steps

1. **Add Real Product Images** - Replace placeholders with actual synthetic images
2. **Configure SMTP** - Set up email notifications for RFQ submissions
3. **Customize Content** - Update company information, descriptions, etc.
4. **Set Up Monitoring** - Add error tracking and analytics
5. **Configure CDN** - For image delivery in production

## Support

For additional help, refer to the main README.md or contact the development team.

