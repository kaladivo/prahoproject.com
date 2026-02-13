# PRAHO! project - Design Tokens Reference

Extracted from live prahoproject.com (Amedeo theme by Elated Themes). All values are computed CSS from the production site as of 2026-02-13.

---

## 1. Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `font-heading` | `Montserrat, sans-serif` | H1-H5, body text, paragraphs |
| `font-mono` | `Inconsolata, sans-serif` | H6 subtitles, nav items, buttons, footer links |
| `font-display` | `"Open Sans"` | Homepage hero tagline (70px) |
| `font-accent` | `"Cormorant Garamond", Georgia, serif` | Decorative / occasional use |

### Heading Styles

#### H1 - Page Title
```
font-family: Montserrat, sans-serif
font-size: 50px
font-weight: 500
line-height: 57px (1.14)
letter-spacing: -0.75px
color: #4d2dff (purple)
text-transform: none
```

#### H2
```
font-family: Montserrat, sans-serif
font-size: 40px
font-weight: 500
line-height: 47px (1.175)
letter-spacing: -0.6px
color: #000000
text-transform: none
```

#### H3
```
font-family: Montserrat, sans-serif
font-size: 35px
font-weight: 500
line-height: 42px (1.2)
letter-spacing: -0.7px
color: #000000
text-transform: none
```

#### H4 - Section Heading
```
font-family: Montserrat, sans-serif
font-size: 27px
font-weight: 500
line-height: 34px (1.26)
letter-spacing: normal
color: #4d2dff (purple)
text-transform: none
text-align: alternating left/right per section
```

#### H5
```
font-family: Montserrat, sans-serif
font-size: 18px
font-weight: 500
line-height: 25px (1.39)
letter-spacing: normal
color: #000000
text-transform: none
```

#### H6 - Monospace Subtitle / Label
```
font-family: Inconsolata, sans-serif
font-size: 14px
font-weight: 400
line-height: 24px (1.71)
letter-spacing: 4.2px (0.3em)
text-transform: uppercase
color: #000000
```
- Variants: sometimes `color: #4d2dff` for section labels
- Smaller variant: `font-size: 13px`, `letter-spacing: 3.9px`

### Body Text
```
font-family: Montserrat, sans-serif
font-size: 14px
font-weight: 400
line-height: 27px (1.93)
letter-spacing: normal
color: #000000
```

### Homepage Hero Tagline
```
font-family: "Open Sans"
font-size: 70px
font-weight: 400
line-height: 77px (1.1)
letter-spacing: normal
color: #000000
```

---

## 2. Colors

### Primary Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `color-primary` | `#4d2dff` | `rgb(77, 45, 255)` | Primary purple - H1, H4, links, accents |
| `color-black` | `#000000` | `rgb(0, 0, 0)` | Text, footer bg, buttons |
| `color-white` | `#ffffff` | `rgb(255, 255, 255)` | Backgrounds, button text on dark |

### Neutral / Gray Scale

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `color-text` | `#000000` | `rgb(0, 0, 0)` | Primary body text |
| `color-text-dark` | `#212121` | `rgb(33, 33, 33)` | Secondary text |
| `color-text-muted` | `#333333` | `rgb(51, 51, 51)` | Tertiary text |
| `color-gray` | `#6d6d6d` | `rgb(109, 109, 109)` | Muted elements |
| `color-placeholder` | `#7e7e7e` | `rgb(126, 126, 126)` | Form placeholders |
| `color-border-input` | `#a5a5a5` | `rgb(165, 165, 165)` | Input borders (secondary) |
| `color-border-light` | `#aaaaaa` | `rgb(170, 170, 170)` | Light borders |
| `color-bg-muted` | `#ededed` | `rgb(237, 237, 237)` | Muted backgrounds |
| `color-bg-warm` | `#fff2dc` | `rgb(255, 242, 220)` | Warm accent background |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `color-link` | `#000000` | Inline links in body text (no underline) |
| `color-footer-text` | `#ffffff` | Footer text on black bg |
| `color-footer-bg` | `#000000` | Footer background |

---

## 3. Spacing

### Container / Grid

| Token | Value | Notes |
|-------|-------|-------|
| `container-max-width` | `1300px` | From `eltdf-grid-1300` class |
| `content-width` | `~1138px` | Measured content area |
| `grid-gutter` | `30px` | Portfolio grid gap / column gap |

### Section Padding

| Token | Value | Notes |
|-------|-------|-------|
| `section-padding-y` | `0px - 18px` | Varies by section, often controlled by Visual Composer custom CSS |

---

## 4. Buttons

### Primary Button (CTA)
```
font-family: Inconsolata, sans-serif
font-size: 12px
font-weight: 400
letter-spacing: 3.6px (0.3em)
text-transform: uppercase
height: 66px
padding: 20px 83px
color: #ffffff
background-color: #000000
border: 1px solid transparent
border-radius: 0px
text-decoration: none
```
Class: `.eltdf-btn.eltdf-btn-huge.eltdf-btn-solid`

#### Hover State
```
color: #000000
background-color: #ffffff
border: 1px solid #000000
```

### Form Submit Button
```
font-family: Inconsolata, sans-serif
font-size: 13px
font-weight: 400
letter-spacing: 3.9px
color: #ffffff
background-color: #000000
border: 1px solid transparent
border-radius: 0px
padding: 16px 83px
height: 60px
```

---

## 5. Navigation

### Nav Items
```
font-family: Inconsolata, sans-serif
font-size: 14px
font-weight: 400
line-height: 24px
letter-spacing: 4.2px (0.3em)
text-transform: uppercase
color: #000000
```

### Nav Item Spacing
- Horizontal padding: `17px` per item

### Header
- Class: `.eltdf-page-header`
- Behavior: `eltdf-fixed-on-scroll` (sticky on scroll up)
- Default background: transparent
- Scrolled background: `rgba(255, 255, 255, 0.98)`
- Logo display height: `40px`
- Logo variants: standard (P2), dark (vertical mark), light (white version)

### Mobile
- Hamburger trigger: custom SVG icon
- Mobile header class: `eltdf-default-mobile-header`
- Sticky up behavior on mobile: `eltdf-sticky-up-mobile-header`

---

## 6. Form Inputs

### Text / Email Inputs
```
font-family: Montserrat, sans-serif
font-size: 14px
font-weight: 400
color: #7e7e7e (placeholder) / #000000 (value)
background-color: transparent
border-top: none
border-right: none
border-bottom: 1px solid #000000
border-left: none
border-radius: 0px
padding: 12px 0px
height: 53px
```

### Textarea
Same as text input but:
```
height: 305px (auto-grows)
```

---

## 7. Portfolio Grid

### Grid Layout
```
display: float-based (not CSS Grid)
columns: 3 (class: eltdf-three-columns)
item-width: ~389px (1/3 of container - gutter)
item-height: ~359px
gap: 30px (margin-bottom on items)
item-aspect-ratio: ~1.08:1 (nearly square)
```

### Portfolio Item Hover
- Overlay: slide-up info panel (class: `eltdf-pl-info-slide-up`)
- Title: H4 style (Montserrat 27px 500 purple)
- Category label: Inconsolata 14px uppercase, 4.2px tracking, black

---

## 8. Content Section Pattern

### Alternating Left/Right Layout (from /o-projektu/)
Content sections alternate alignment:
1. **Odd sections** (1st, 3rd, 5th...): `text-align: left` / `text-align: start`
2. **Even sections** (2nd, 4th, 6th...): `text-align: right`

This applies to both H4 headings and H6 subtitle labels within each section.

---

## 9. Footer

### Footer Top (3-column grid on black)
```
background-color: #000000
color: #ffffff
```

#### Column 1: Contact Info
```
font-family: Montserrat, sans-serif
font-size: 13px
color: #ffffff
```
Labels use prefix pattern: `T:`, `E:`, `A:`

#### Column 2: Legal Links
```
font-family: Inconsolata, sans-serif
font-size: 13px
letter-spacing: 3.9px
text-transform: uppercase
color: #ffffff
text-decoration: none
```

#### Column 3: Newsletter
```
label: "Newsletter" (H6-style Inconsolata uppercase)
input: email field with submit "checkmark" button
```

### Footer Bottom Bar
```
background-color: #000000
```
- Left: copyright text (H6 style - Inconsolata 14px uppercase 4.2px tracking)
- Right: social media icons (Instagram, Facebook, LinkedIn, YouTube)

---

## 10. Breakpoints

Extracted from theme CSS media queries (primary breakpoints):

| Token | Value | Description |
|-------|-------|-------------|
| `bp-mobile-sm` | `320px` | Small mobile |
| `bp-mobile` | `480px` | Mobile |
| `bp-mobile-lg` | `600px` | Large mobile |
| `bp-tablet-sm` | `680px` | Small tablet |
| `bp-tablet` | `768px` | Tablet |
| `bp-tablet-lg` | `900px` | Large tablet |
| `bp-desktop-sm` | `1024px` | Small desktop / landscape tablet |
| `bp-desktop` | `1200px` | Desktop |
| `bp-desktop-md` | `1280px` | Medium desktop |
| `bp-desktop-lg` | `1366px` | Large desktop |
| `bp-desktop-xl` | `1400px` | Extra-large desktop |
| `bp-desktop-xxl` | `1440px` | Wide desktop |

Key breakpoints for the site layout:
- **Hamburger menu**: triggers at `1024px`
- **Portfolio grid**: 3 cols > 2 cols at `768px` > 1 col at `480px`
- **Container**: `1300px` max-width

---

## 11. Miscellaneous

### Inline Links
```
color: #000000
text-decoration: none
font-weight: 400
```
- Hover: typically underline or color change to purple

### Social Media Icons
- Font Awesome 5 Brands icons
- Platforms: Instagram, Facebook, LinkedIn, YouTube
- Color: white (in footer on black bg)

### Logo Variants
| Variant | File | Dimensions | Usage |
|---------|------|-----------|-------|
| Standard | `P2-e1758973214231.png` | 133x81px natural, 66x40px display | Default header |
| Dark (mark) | `logo-praho-scaled-e1758879575410.png` | 70x94px natural, 30x40px display | Dark backgrounds |
| Light (white) | `logo_master-whitewhite.png` | 1489x908px natural, 66x40px display | Light header on dark hero |

### Search
- Type: fullscreen search (`eltdf-fullscreen-search`)
- Animation: fade (`eltdf-search-fade`)

### Page Transitions
- Smooth page transitions enabled (`eltdf-smooth-page-transitions`)
