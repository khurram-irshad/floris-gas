# Fonts Directory

## Global Font Setup - Best Practices

### Current Setup:
- **Inter Font**: ✅ Installed and working globally via `@fontsource/inter`
- **Gilroy Font**: ⏳ Ready to load (commented out until font files added)
- **Tailwind Integration**: ✅ Clean font classes available

### Required Font Files:
- `Gilroy-Medium.woff2` - Primary format (modern browsers)
- `Gilroy-Medium.woff` - Fallback format (older browsers)

### Font Classes Available:
- `font-gilroy` - Gilroy with Inter fallback
- `font-inter` - Inter font
- `font-sans` - Default system fonts

### Best Practices Implemented:
✅ **Global CSS Import**: Fonts loaded in globals.css
✅ **Proper Fallbacks**: Inter → system-ui → sans-serif
✅ **Font Display Swap**: Prevents layout shift
✅ **Multiple Formats**: WOFF2 + WOFF for browser support
✅ **Tailwind Integration**: Simple class-based usage
✅ **Performance Optimized**: Minimal font loading overhead

### Usage:
```jsx
// Navigation uses Gilroy
<header className="font-gilroy">

// Fallback to Inter if Gilroy not available
<div className="font-inter">

// System fonts
<div className="font-sans">
```

### Installation Steps:

**Current Status**: Navigation uses Inter font (professional fallback)

**To Add Gilroy Font**:
1. Add `Gilroy-Medium.woff2` and `Gilroy-Medium.woff` to this directory
2. Uncomment the @font-face rule in `src/app/globals.css` (lines 7-16)
3. Update `tailwind.config.js` font-family 'gilroy' to include 'Gilroy' first
4. No restart needed - fonts will load automatically

**Current Working State**:
- ✅ Navigation uses Inter font (looks professional)
- ✅ All font classes work correctly
- ✅ No build errors
- ⏳ Ready for Gilroy upgrade when font files available
