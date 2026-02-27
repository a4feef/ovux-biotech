# How to Add Your OVUX Biotech Logo

## Step 1: Prepare Your Logo Files

You need at least one of these:

1. **Full Logo** (`ovux-logo.png` or `.svg`)
   - The complete logo with "OVUX biotech" text
   - Recommended: 200-300px width
   - PNG with transparency or SVG

2. **Icon Only** (`ovux-icon.png` or `.svg`)
   - Just the circular blue emblem
   - Recommended: 64x64px or 128x128px
   - Used for favicon and small displays

## Step 2: Save Files

Place your logo files in:
```
ovux-biotech/public/logo/
```

Files should be named:
- `ovux-logo.png` (or `.svg`)
- `ovux-icon.png` (or `.svg`)

## Step 3: Test

1. Restart your dev server:
   ```powershell
   npm run dev
   ```

2. Visit your website
3. Check:
   - ✅ Logo appears in navbar (top left)
   - ✅ Icon appears in browser tab (favicon)
   - ✅ Logo appears in admin dashboard

## What's Already Set Up

✅ Navbar component - ready to show logo  
✅ Admin header - ready to show icon  
✅ Favicon - ready to use icon  
✅ Fallback text - shows if logo files don't exist  

## Logo Specifications

Based on your logo design:
- **Colors:** Blue emblem, dark gray/black text
- **Style:** Modern, professional, clean
- **Format:** PNG with transparency or SVG recommended

## Troubleshooting

**Logo doesn't appear:**
- Check file is in `/public/logo/` folder
- Check filename matches exactly: `ovux-logo.png`
- Check file format (PNG or SVG)
- Restart dev server after adding files

**Logo looks blurry:**
- Use SVG format (scalable)
- Or use higher resolution PNG (2x size)

**Favicon doesn't change:**
- Clear browser cache
- Use `.ico` format for favicon (optional)
- Or browser may cache old favicon

## Optional: Create Favicon

If you want a separate favicon file:

1. Create `favicon.ico` (32x32px or 16x16px)
2. Place in `/public/` (not `/public/logo/`)
3. Update `app/layout.tsx` if needed

The icon from `/logo/ovux-icon.png` will be used automatically if favicon.ico doesn't exist.


