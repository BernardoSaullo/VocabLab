---
name: Premium Dark Mode Design System
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c1c7d3'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#8b919d'
  outline-variant: '#414751'
  surface-tint: '#a4c9ff'
  primary: '#a4c9ff'
  on-primary: '#00315d'
  primary-container: '#60a5fa'
  on-primary-container: '#003a6b'
  inverse-primary: '#0060ac'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#fabd34'
  on-tertiary: '#412d00'
  tertiary-container: '#d19900'
  on-tertiary-container: '#4b3500'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffdea4'
  tertiary-fixed-dim: '#fabd34'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h2:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is engineered at the intersection of high-stakes financial precision and the cognitive focus required for language acquisition. The brand personality is **Elite, Analytical, and Unobtrusive**. It targets a high-net-worth or high-aspiration demographic that values efficiency and "quiet luxury" in digital tools.

The visual style is **Minimalist-Technocratic**, heavily inspired by high-end dashboard interfaces. It prioritizes data density without clutter, using intentional whitespace to create a sense of breathing room within a dark environment. The emotional response should be one of "calm authority"—the user should feel they are using a professional-grade instrument rather than a casual application. Key characteristics include razor-thin borders, surgical typographic alignment, and a "glow" effect for primary actions that mimics high-end hardware displays.

## Colors

The palette is anchored in a "True Dark" philosophy. The background uses a deep charcoal (#09090b) to maintain perfect black levels on OLED displays while providing enough depth for subtle layering. 

- **Primary Accent:** A vibrant, high-contrast blue (#60a5fa) is used sparingly for core actions, progress indicators, and interactive states. It is intended to "pop" against the dark background, functioning as a beacon for the user's eye.
- **Secondary Accent:** A teal/cyan is used for secondary success states or specific fintech growth metrics to provide variety without breaking the cool-toned harmony.
- **Neutrals:** A scale of "Zinc" grays is used for borders (#27272a) and surfaces (#18181b). These are mathematically derived to ensure legibility and accessibility (WCAG AA+) for all textual content against the deep background.

## Typography

The design system utilizes **Manrope** exclusively to maintain a modern, geometric, yet highly legible feel across both linguistic and numerical data. 

- **Scale:** The typographic hierarchy is strict. Large "Display" styles are reserved for high-level account balances or language mastery levels.
- **Micro-copy:** Small labels use increased letter spacing and uppercase styling to ensure readability at small sizes, particularly for data headers in fintech tables.
- **Numeric Display:** For financial figures, use tabular lining figures to ensure numbers align perfectly in vertical columns, facilitating quick scanning of transaction histories.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column fluid grid** for mobile. The spacing rhythm is strictly based on an **8px linear scale**, ensuring mathematical consistency across all modules.

- **Margins & Gutters:** Generous margins (32px) are used to isolate the application interface from the hardware bezel, reinforcing the premium dashboard aesthetic.
- **Intentional Whitespace:** Content is grouped into "Information Islands." Use the `lg` (40px) spacing unit to separate major functional blocks (e.g., the language lesson player from the global navigation).
- **Data Density:** Within cards or lists, use the `sm` (12px) unit to maintain a high information density that feels professional and efficient.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering** and **Subtle Outlines** rather than traditional shadows. This maintains the minimalist, dashboard-inspired aesthetic.

- **Layer 0 (Background):** #09090b. The base canvas.
- **Layer 1 (Cards/Containers):** #18181b with a 1px solid border of #27272a.
- **Layer 2 (Modals/Popovers):** #1c1c1f with a 1px solid border of #3f3f46. These elements may feature a very soft, high-diffusion shadow (0px 20px 50px rgba(0,0,0,0.5)) to separate them from the content below.
- **Interactive State:** When an element is focused or active, the border color shifts to the primary blue (#60a5fa), often accompanied by a subtle outer glow (2px spread, low opacity) to simulate a light-emitting interface.

## Shapes

The shape language is defined by **Precision Geometry**. All primary containers, buttons, and input fields utilize an **8px (0.5rem)** corner radius. 

This specific radius was chosen to soften the "industrial" feel of the dark mode without veering into the playfulness of fully rounded "pill" shapes. It strikes a balance between professional rigidity and modern software friendliness. Small components like tags or status indicators may use a slightly smaller radius (4px) to maintain visual proportion.

## Components

### Buttons
- **Primary:** Solid #60a5fa fill with #09090b text. High impact.
- **Secondary:** Ghost style with #27272a border and #fafafa text.
- **Action:** 8px radius, medium weight typography, 12px horizontal padding.

### Cards
- **Structure:** 1px border (#27272a), #18181b background.
- **Headers:** Use `label-sm` (uppercase) for category headers within cards to provide clear data segmentation.

### Inputs & Form Fields
- **Default:** Transparent background with #27272a border.
- **Focus:** Border transitions to #60a5fa with a subtle 2px blue "bloom" effect.
- **Typography:** Input text uses `body-md`.

### Fintech-Specific Components
- **Transaction Lists:** Clean rows with 1px bottom dividers. Use `tabular-nums` for amount alignment.
- **Mini-Charts:** Sparklines should use the primary blue with a subtle gradient fill (10% opacity) towards the bottom.

### Language Learning Components
- **Progress Bars:** Thin 4px height bars. The "track" is #27272a, and the "progress" is a solid #60a5fa.
- **Character Cards:** High-contrast tiles with centralized `h1` typography for character recognition drills.