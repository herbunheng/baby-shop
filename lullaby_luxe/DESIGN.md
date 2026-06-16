---
name: Lullaby & Luxe
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#42474d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#73777e'
  outline-variant: '#c2c7ce'
  surface-tint: '#42617d'
  primary: '#42617d'
  on-primary: '#ffffff'
  primary-container: '#a7c7e7'
  on-primary-container: '#34536f'
  inverse-primary: '#aacaea'
  secondary: '#7a5461'
  on-secondary: '#ffffff'
  secondary-container: '#ffcddd'
  on-secondary-container: '#7a5462'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#c3c4c4'
  on-tertiary-container: '#4f5151'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#aacaea'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#294964'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#eabac9'
  on-secondary-fixed: '#2f121e'
  on-secondary-fixed-variant: '#603c4a'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
---

## Brand & Style

This design system is built for a premium, high-end e-commerce experience catering to modern parents. The brand persona is **caring, reliable, and sophisticated**, moving away from "cheap" juvenile aesthetics toward a curated, boutique feel. 

The design style is a blend of **Minimalism** and **Soft Modernism**. It prioritizes high-quality product photography and generous whitespace to create a sense of calm and order—essential for sleep-deprived parents. The interface uses a "Soft-Touch" visual language: high-contrast legibility paired with ultra-smooth radii and subtle depth to evoke the comfort of premium baby textiles.

## Colors

The palette is rooted in a sophisticated interpretation of traditional nursery tones. 

- **Primary (#A7C7E7):** A dusty, soft blue used for key actions, navigation highlights, and trust signals.
- **Secondary (#F2C1D1):** A muted petal pink used for secondary call-to-actions, promotional tags, and accents.
- **Tertiary/Surface (#F5F5F5):** A warm light gray used for section backgrounds to provide soft contrast against pure white cards.
- **Neutral (#4A4A4A):** A soft charcoal for text to ensure high readability without the harshness of pure black.

Use a 60-30-10 distribution, where white and light gray dominate the layout to maintain a "breathable" atmosphere.

## Typography

The typography strategy balances the playfulness of childhood with the clarity of a high-end retailer. 

**Quicksand** is used for headlines; its rounded terminals feel approachable and safe. For body copy, **Plus Jakarta Sans** provides a modern, clean, and highly legible experience that ensures technical product details and reviews are easy to scan. 

Weight is used purposefully: headlines should remain Semibold (600) or Bold (700) to stand out against the soft color palette. Body text remains at a 400 weight to keep the UI light.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **single-column fluid layout** for mobile. 

- **Padding:** Vertical rhythm is key. Use large 80px gaps between homepage sections to prevent visual clutter.
- **Margins:** Use a standard 24px margin for mobile containers to ensure content doesn't feel cramped against the screen edges.
- **Product Grids:** On desktop, use a 4-column layout for product listings; on mobile, transition to a 2-column layout to maintain image impact while allowing for scrolling efficiency.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers** and **Ambient Depth**. 

- **Base Layer:** Pure white (#FFFFFF) is the primary surface for cards and interactive elements.
- **Surface Layer:** Light Gray (#F5F5F5) is used for the background of the page to make white cards "pop" without needing dark borders.
- **Shadows:** Use extremely soft, diffused shadows for elevated elements like product cards and modals. 
    - *Example:* `box-shadow: 0 10px 30px rgba(167, 199, 231, 0.1);` (Using a primary-tinted shadow to keep the look clean and integrated).
- **Interactions:** On hover, cards should lift slightly (move -4px Y-axis) and the shadow should become slightly more pronounced.

## Shapes

The shape language is defined by the **"Double-Extra-Large" (2xl) rounding philosophy**. Sharp corners are strictly avoided to reinforce the "baby-safe" and "soft" brand narrative.

- **Standard Elements:** Buttons, input fields, and small chips use a 1rem (16px) radius.
- **Large Elements:** Product cards and hero banners use a 1.5rem (24px) radius.
- **Interactive Circles:** Category icons and navigation arrows should be fully pill-shaped or circular.

## Components

### Buttons
- **Primary:** Solid #A7C7E7 with white text. 16px radius. No border.
- **Secondary:** Ghost style with #F2C1D1 border and text. 16px radius.
- **Add to Cart:** A wider, more prominent button using the Primary color, featuring a subtle "plus" icon.

### Product Cards
- **Structure:** Image (top), Product Title (Quicksand 18px), Price (Bold), and a "Quick Add" button that appears on hover.
- **Style:** White background, 24px corner radius, and a 1px soft gray stroke or the tinted ambient shadow defined in Elevation.

### Input Fields
- **Style:** #F5F5F5 background with no border. On focus, a 2px solid #A7C7E7 border appears. 
- **Radius:** 16px.

### Category Chips
- Small, pill-shaped buttons for filtering. Active state uses Primary color; inactive state uses Light Gray with Neutral text.

### Category Icons
- Circular containers with a soft Primary or Secondary background (at 10% opacity) housing line-art icons representing categories like "Sleep," "Bath," or "Play."