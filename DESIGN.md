---
name: Premium Personal Finance System
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbd9db'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#efedef'
  surface-container-high: '#e9e7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1c1d'
  on-surface-variant: '#43474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f2'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#172839'
  on-primary: '#ffffff'
  primary-container: '#2d3e50'
  on-primary-container: '#97a9be'
  inverse-primary: '#b6c8df'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#352408'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d391c'
  on-tertiary-container: '#bfa37e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b6c8df'
  on-primary-fixed: '#0a1d2d'
  on-primary-fixed-variant: '#37485b'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#feddb5'
  tertiary-fixed-dim: '#e0c29b'
  on-tertiary-fixed: '#281801'
  on-tertiary-fixed-variant: '#584325'
  background: '#fbf9fa'
  on-background: '#1b1c1d'
  surface-variant: '#e4e2e3'
typography:
  h1-display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2-summary:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3-card-title:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1'
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
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on the pillars of **Trust, Clarity, and Sophistication**. It targets high-net-worth individuals and professionals who require a sense of calm and control over their financial data. The brand personality is that of a "Quiet Advisor"—authoritative yet approachable, utilizing a **Premium Minimalist** aesthetic.

The visual style leverages significant whitespace to reduce cognitive load, allowing complex financial data to breathe. It avoids the clinical coldness of traditional banking by incorporating warm neutrals and soft, organic shadows. Every interaction is designed to feel deliberate and high-end, mirroring the experience of a premium physical concierge service.

## Colors

The palette is anchored by a sophisticated **Deep Teal (Indigo-tinted)** primary color used for core navigation and interactive elements. The secondary color is a soft Indigo, providing a modern tech-forward accent.

- **Primary:** Deep Teal (#2D3E50) for high-level hierarchy.
- **Success:** Soft Emerald (#4ADE80) used for positive trends and balanced budgets.
- **Danger:** Coral (#F87171) for alerts, overspending, or critical debt indicators.
- **Neutrals:** A range of warm greys (Stone and Slate mix) to maintain a premium feel. The background is a crisp off-white to prevent screen fatigue.
- **Accents:** Subtle tints of the primary color are used for background fills in chips and active states to maintain tonal consistency.

## Typography

This design system utilizes a dual-font approach to balance personality with utility. **Manrope** is used for headings and financial summaries to provide a modern, geometric, and premium feel. **Inter** is utilized for body text, data tables, and labels to ensure maximum readability at small scales.

Financial figures should always use **tabular-nums** to ensure columns of numbers align perfectly for easy comparison. Bold weights are reserved for primary balance summaries and section headers to create a clear scan-path for the user.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. The main content container is capped at 1280px to maintain readability on wide monitors, centered with generous outer margins. 

A 12-column grid is used for dashboard layouts:
- **Financial Overviews:** Usually span 8 columns for charts and 4 for side-actions.
- **Transaction Lists:** Full 12-column width with significant horizontal padding (32px).
- **Rhythm:** The system uses an 8px base unit. Component internal padding should favor `16px` (sm) or `24px` (md) to reinforce the airy, premium feel.

## Elevation & Depth

Depth is conveyed through **Ambient Shadows** and **Tonal Layering** rather than heavy borders. 

- **Surface 0 (Background):** Warm off-white (#F9FAFB).
- **Surface 1 (Cards/Panels):** Pure White (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)).
- **Surface 2 (Popovers/Modals):** Pure White with a more pronounced shadow (0px 12px 32px rgba(0,0,0,0.08)).

Avoid dark borders; instead, use a 1px stroke in a very light grey (#F1F5F9) to define boundaries only where necessary for accessibility.

## Shapes

The design system employs a **Rounded** shape language to appear friendly and modern. 

- **Primary Radius:** 12px for standard buttons, input fields, and small cards.
- **Large Radius (Container-xl):** 16px to 24px for main dashboard cards and modals.
- **Pill Radius:** Used exclusively for status chips (e.g., "Paid", "Pending") and toggle switches.

Rounded corners should be consistent across all nested elements. If a card has a 16px radius, the internal elements should have a slightly smaller radius (8-12px) to maintain visual harmony.

## Components

### Elegant Cards
Cards are the primary container. They feature 16px rounded corners, white backgrounds, and subtle 1px light-grey borders. Header areas within cards should have a clear separation using whitespace rather than divider lines.

### Refined Progress Bars
Used for budget tracking. These should have a height of 8px, a light-grey track, and a primary-color or success-color fill. The transition should be rounded. For "over-budget" states, the fill transitions to the Coral (Danger) color.

### Subtle Trend Indicators
Small, unobtrusive icons (arrow-up-right, arrow-down-right) paired with percentage text. Use the Success (Emerald) color for positive (savings up, spending down) and Danger (Coral) for negative.

### Buttons
- **Primary:** Deep Teal background, white text, 12px radius. High-gloss hover effect (slight opacity change).
- **Secondary:** Ghost style with a light-grey border or a subtle tinted background (#F1F5F9).

### Input Fields
Inputs use a 12px radius with a 1px border. On focus, the border color changes to the Secondary Indigo, and a soft Indigo outer glow is applied (4px spread).

### Data Visualization
Charts should use the Primary, Secondary, and Success colors. Line charts should be slightly smoothed (curved) to match the rounded aesthetic of the UI.