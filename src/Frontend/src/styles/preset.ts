import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// ─────────────────────────────────────────────
// PrimeNG Preset — VocabLab / Premium Dark Mode
// Source: DESIGN.md
// ─────────────────────────────────────────────

export const MyPreset = definePreset(Aura, {
    semantic: {
        // ── Primary palette (blue scale around #60a5fa) ───────────────
        primary: {
            50:  '#f0f7ff',
            100: '#d4e3ff',
            200: '#a4c9ff',
            300: '#7ab4ff',
            400: '#60a5fa',
            500: '#3b8ef3',
            600: '#1a6fd4',
            700: '#0060ac',
            800: '#004883',
            900: '#00315d',
            950: '#001c39',
        },

        colorScheme: {
            dark: {
                // ── Surface ────────────────────────────────────────────
                surface: {
                    0:   '#ffffff',
                    50:  '#e5e1e4',
                    100: '#c1c7d3',
                    200: '#8b919d',
                    300: '#414751',
                    400: '#353437',
                    500: '#2a2a2c',
                    600: '#201f22',
                    700: '#1c1b1d',
                    800: '#131315',
                    900: '#0e0e10',
                    950: '#09090b',
                },

                // ── Primary role ───────────────────────────────────────
                primary: {
                    color:          '#60a5fa',   // primary-container — action blue
                    contrastColor:  '#003a6b',   // on-primary-container
                    hoverColor:     '#7ab4ff',
                    activeColor:    '#3b8ef3',
                },

                // ── Highlight (selected state) ─────────────────────────
                highlight: {
                    background:     'rgba(96, 165, 250, 0.15)',
                    focusBackground:'rgba(96, 165, 250, 0.25)',
                    color:          '#a4c9ff',
                    focusColor:     '#d4e3ff',
                },

                // ── Focus ring ─────────────────────────────────────────
                focusRing: {
                    color:  '#60a5fa',
                    shadow: '0 0 0 2px rgba(96, 165, 250, 0.25)',
                },

                // ── Text ───────────────────────────────────────────────
                text: {
                    color:        '#e5e1e4',   // on-surface
                    hoverColor:   '#ffffff',
                    mutedColor:   '#c1c7d3',   // on-surface-variant
                    highlightBg:  'rgba(96, 165, 250, 0.15)',
                    highlightColor: '#a4c9ff',
                },

                // ── Content areas ──────────────────────────────────────
                content: {
                    background:        '#1c1b1d',   // surface-container-low
                    hoverBackground:   '#201f22',   // surface-container
                    borderColor:       '#414751',   // outline-variant
                    color:             '#e5e1e4',
                    hoverColor:        '#ffffff',
                },

                // ── Overlay (modals, popovers) ─────────────────────────
                overlay: {
                    select: {
                        background:  '#201f22',
                        borderColor: '#414751',
                        color:       '#e5e1e4',
                    },
                    popover: {
                        background:  '#201f22',
                        borderColor: '#414751',
                        color:       '#e5e1e4',
                        shadow:      '0px 20px 50px rgba(0, 0, 0, 0.5)',
                    },
                    modal: {
                        background:  '#201f22',
                        borderColor: '#414751',
                        color:       '#e5e1e4',
                        shadow:      '0px 20px 50px rgba(0, 0, 0, 0.5)',
                    },
                    navigation: {
                        shadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
                    },
                },

                // ── Form fields ────────────────────────────────────────
                formField: {
                    background:         'transparent',
                    disabledBackground: '#1c1b1d',
                    filledBackground:   '#1c1b1d',
                    filledHoverBackground: '#201f22',
                    filledFocusBackground: '#201f22',
                    borderColor:        '#414751',   // outline-variant
                    hoverBorderColor:   '#8b919d',   // outline
                    focusBorderColor:   '#60a5fa',   // primary-container
                    invalidBorderColor: '#ffb4ab',   // error
                    color:              '#e5e1e4',
                    disabledColor:      '#8b919d',
                    placeholderColor:   '#8b919d',
                    invalidPlaceholderColor: '#ffb4ab',
                    floatLabelColor:    '#8b919d',
                    floatLabelFocusColor: '#60a5fa',
                    floatLabelActiveColor: '#8b919d',
                    floatLabelInvalidColor: '#ffb4ab',
                    iconColor:          '#8b919d',
                    shadow:             'none',
                },

                // ── Navigation ─────────────────────────────────────────
                navigation: {
                    item: {
                        focusBackground:  'rgba(96, 165, 250, 0.12)',
                        activeBackground: 'rgba(96, 165, 250, 0.18)',
                        color:            '#c1c7d3',
                        focusColor:       '#a4c9ff',
                        activeColor:      '#a4c9ff',
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color:      '#8b919d',
                    },
                    submenuIcon: {
                        color:       '#8b919d',
                        focusColor:  '#a4c9ff',
                        activeColor: '#a4c9ff',
                    },
                },
            },
        },
    },
});
