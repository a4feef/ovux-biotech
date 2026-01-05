# Ovux Biotech Solutions - Automated Setup Script
# Run this script after installing Node.js

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Ovux Biotech Solutions - Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js first:" -ForegroundColor Yellow
    Write-Host "1. Go to https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Download the LTS version" -ForegroundColor White
    Write-Host "3. Run the installer" -ForegroundColor White
    Write-Host "4. Restart PowerShell and run this script again" -ForegroundColor White
    exit 1
}

# Check if npm is available
Write-Host "Checking for npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm is not available!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 1: Install dependencies
Write-Host "Step 1: Installing dependencies..." -ForegroundColor Cyan
Write-Host "This may take a few minutes..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Step 2: Check/Create .env file
Write-Host "Step 2: Setting up environment file..." -ForegroundColor Cyan
if (-not (Test-Path .env)) {
    Write-Host "Creating .env file from env.example..." -ForegroundColor Yellow
    Copy-Item env.example .env
    
    # Generate a secure NEXTAUTH_SECRET if openssl is available
    try {
        $secret = openssl rand -base64 32 2>$null
        if ($secret) {
            (Get-Content .env) -replace 'NEXTAUTH_SECRET="your-secret-key-here-change-in-production"', "NEXTAUTH_SECRET=`"$secret`"" | Set-Content .env
            Write-Host "✓ Generated secure NEXTAUTH_SECRET" -ForegroundColor Green
        } else {
            Write-Host "⚠ Using default NEXTAUTH_SECRET - please change it in .env file!" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "⚠ Using default NEXTAUTH_SECRET - please change it in .env file!" -ForegroundColor Yellow
    }
    Write-Host "✓ .env file created" -ForegroundColor Green
} else {
    Write-Host "✓ .env file already exists" -ForegroundColor Green
}
Write-Host ""

# Step 3: Set up database
Write-Host "Step 3: Setting up database..." -ForegroundColor Cyan
Write-Host "Creating database schema..." -ForegroundColor Yellow
npx prisma db push
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to create database" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Database schema created" -ForegroundColor Green

Write-Host "Generating Prisma client..." -ForegroundColor Yellow
npx prisma generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to generate Prisma client" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Prisma client generated" -ForegroundColor Green

Write-Host "Seeding database with initial data..." -ForegroundColor Yellow
npm run db:seed
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to seed database" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Database seeded" -ForegroundColor Green
Write-Host ""

# Step 4: Check for images
Write-Host "Step 4: Checking for product images..." -ForegroundColor Cyan
if (-not (Test-Path "public\images")) {
    New-Item -ItemType Directory -Path "public\images" -Force | Out-Null
    Write-Host "✓ Created images directory" -ForegroundColor Green
}

$requiredImages = @(
    "hero-lab-equipment.jpg",
    "hplc-column.jpg",
    "gc-column.jpg",
    "lab-glassware.jpg",
    "lab-equipment.jpg",
    "pharma-accessories.jpg"
)

$missingImages = @()
foreach ($image in $requiredImages) {
    if (-not (Test-Path "public\images\$image")) {
        $missingImages += $image
    }
}

if ($missingImages.Count -eq 0) {
    Write-Host "✓ All required images found" -ForegroundColor Green
} else {
    Write-Host "⚠ Missing images (website will work but images won't display):" -ForegroundColor Yellow
    foreach ($image in $missingImages) {
        Write-Host "  - $image" -ForegroundColor White
    }
    Write-Host ""
    Write-Host "You can add these images later. See public/images/README.md for details." -ForegroundColor Yellow
}
Write-Host ""

# Step 5: Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete! ✓" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Start the development server:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Open your browser:" -ForegroundColor White
Write-Host "   - Website: http://localhost:3000" -ForegroundColor Cyan
Write-Host "   - Admin: http://localhost:3000/admin/login" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Login with:" -ForegroundColor White
Write-Host "   Email: admin@ovuxbiotech.com" -ForegroundColor Cyan
Write-Host "   Password: ChangeThisPassword123!" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠ IMPORTANT: Change the admin password after first login!" -ForegroundColor Red
Write-Host ""


