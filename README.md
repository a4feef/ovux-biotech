# Ovux Biotech Solutions - Website & Admin Dashboard

A complete, production-grade website and admin dashboard for Ovux Biotech Solutions, a Canadian B2B company specializing in global pharmaceutical and laboratory equipment supply.

## Features

### Public Website
- **Home Page** - Hero section, product categories, industries served, regions served
- **About Us** - Company story, compliance statement, global sourcing philosophy
- **Products & Solutions** - Category-based product listings with images
- **HPLC & Chromatography Solutions** - Specialized page for chromatography equipment
- **Services** - Global sourcing, regulatory-aware supply, logistics, account management
- **Contact & RFQ** - Request for Quote form with validation
- **Legal Pages** - Privacy Policy, Terms of Use, Cookie Notice

### Admin Dashboard
- **Secure Authentication** - NextAuth with role-based access (Admin/Staff)
- **RFQ Management** - View, filter, update status, export to CSV
- **Product Management** - Full CRUD operations for products
- **Category Management** - Full CRUD operations for categories
- **User Management** - Create and manage admin/staff accounts
- **Analytics Dashboard** - RFQ statistics, regional data, category breakdowns
- **Audit Logs** - Track all admin actions with timestamps and IP addresses

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Database:** Prisma ORM with SQLite (can be switched to PostgreSQL)
- **Authentication:** NextAuth.js
- **Validation:** Zod
- **Forms:** React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd ovux-biotech
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update the following:
   - `DATABASE_URL` - Database connection string (default: SQLite)
   - `NEXTAUTH_SECRET` - Generate a secure random string (use `openssl rand -base64 32`)
   - `NEXTAUTH_URL` - Your application URL (default: http://localhost:3000)
   - `ADMIN_EMAIL` - Default admin email
   - `ADMIN_PASSWORD` - Default admin password (change after first login!)

4. **Set up the database:**
   ```bash
   npx prisma db push
   npx prisma generate
   npm run db:seed
   ```

5. **Add product images:**
   - Place synthetic, non-branded product images in `/public/images/`
   - See `/public/images/README.md` for required images

6. **Start the development server:**
   ```bash
   npm run dev
   ```

7. **Open your browser:**
   - Public site: http://localhost:3000
   - Admin login: http://localhost:3000/admin/login

## Default Admin Credentials

After seeding the database, you can log in with:
- **Email:** (from `.env` file, default: `admin@ovuxbiotech.com`)
- **Password:** (from `.env` file, default: `ChangeThisPassword123!`)

**⚠️ IMPORTANT:** Change the default password immediately after first login!

## Project Structure

```
ovux-biotech/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── about/             # Public pages
│   ├── products/
│   ├── contact/
│   └── ...
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/                   # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Prisma client
│   ├── validation.ts     # Zod schemas
│   ├── rate-limit.ts     # Rate limiting
│   └── audit.ts          # Audit logging
├── prisma/               # Database schema
│   ├── schema.prisma
│   └── seed.ts
├── public/               # Static assets
│   └── images/          # Product images
└── types/               # TypeScript type definitions
```

## Security Features

- **Input Validation:** All inputs validated with Zod schemas
- **Rate Limiting:** Applied to login and RFQ submission routes
- **Password Hashing:** bcrypt with salt rounds
- **CSRF Protection:** NextAuth handles CSRF tokens
- **Secure Headers:** Configured in `next.config.js`
- **SQL Injection Protection:** Prisma ORM prevents SQL injection
- **XSS Protection:** Input sanitization and secure rendering
- **Role-Based Access Control:** Admin and Staff roles with different permissions

## Database Schema

- **User** - Admin and staff accounts
- **RFQ** - Request for Quote submissions
- **Product** - Product catalog
- **Category** - Product categories
- **AuditLog** - Admin action tracking
- **ProductView** - Analytics tracking

## API Routes

### Public
- `POST /api/rfq` - Submit RFQ (rate limited)

### Admin (requires authentication)
- `GET /api/admin/rfqs` - List RFQs with filters
- `PATCH /api/admin/rfqs` - Update RFQ status
- `GET /api/admin/rfqs/export` - Export RFQs to CSV
- `GET /api/admin/products` - List products
- `POST /api/admin/products` - Create product
- `PATCH /api/admin/products` - Update product
- `DELETE /api/admin/products` - Delete product
- `GET /api/admin/categories` - List categories
- `POST /api/admin/categories` - Create category
- `PATCH /api/admin/categories` - Update category
- `DELETE /api/admin/categories` - Delete category
- `GET /api/admin/users` - List users (Admin only)
- `POST /api/admin/users` - Create user (Admin only)
- `PATCH /api/admin/users` - Update user (Admin only)
- `GET /api/admin/analytics` - Get analytics data
- `GET /api/admin/audit-logs` - Get audit logs (Admin only)

## Production Deployment

### Environment Variables

Ensure all environment variables are set in your production environment:

```env
DATABASE_URL="postgresql://..."  # Use PostgreSQL for production
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-secure-secret-here"
ADMIN_EMAIL="admin@ovuxbiotech.com"
ADMIN_PASSWORD="secure-password-here"
```

### Database Migration

For production, use Prisma migrations:

```bash
npx prisma migrate deploy
```

### Build

```bash
npm run build
npm start
```

## Image Requirements

All product images must be:
- Synthetic and non-branded
- Copyright-safe
- No OEM logos (Agilent, Waters, Thermo, Shimadzu, etc.)
- High quality and web-optimized
- Stored in `/public/images/`

See `/public/images/README.md` for the complete list of required images.

## Support

For issues or questions, please contact the development team.

## License

Proprietary - Ovux Biotech Solutions

