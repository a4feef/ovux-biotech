# How to Install Node.js (Required First Step)

You need Node.js installed before you can run the setup script.

## Quick Installation Guide

### Option 1: Official Website (Recommended)

1. **Go to:** https://nodejs.org/
2. **Download** the LTS version (the green button that says "LTS")
3. **Run the installer** (node-vXX.X.X-x64.msi)
4. **Click "Next"** through the installer
   - ✅ Check "Automatically install the necessary tools"
   - ✅ Keep all default options
5. **Click "Install"** (you may need to allow admin access)
6. **Wait for installation to complete**
7. **Restart your PowerShell/terminal**

### Option 2: Using Chocolatey (if you have it)

```powershell
choco install nodejs-lts
```

### Verify Installation

After installing, open a **NEW** PowerShell window and run:

```powershell
node --version
npm --version
```

You should see version numbers. If you see errors, Node.js didn't install correctly.

## After Installing Node.js

Once Node.js is installed, go back to the `ovux-biotech` folder and run:

```powershell
.\setup.ps1
```

This will automatically:
- Install all dependencies
- Set up the database
- Create the .env file (if needed)
- Seed the database with initial data

## Troubleshooting

**"node is not recognized"**
- Node.js isn't installed or not in your PATH
- Restart PowerShell after installation
- Make sure you downloaded from nodejs.org (not a third-party site)

**"npm is not recognized"**
- npm comes with Node.js, so if this fails, Node.js didn't install correctly
- Try reinstalling Node.js

**Permission errors**
- Run PowerShell as Administrator
- Or install Node.js for your user only (not system-wide)



