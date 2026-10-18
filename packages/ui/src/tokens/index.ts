// Design Tokens for Jamming
// Premium dark visual identity with restrained emerald-green accents

export const colors = {
  // Backgrounds
  background: {
    primary: '#0a0a0a',      // Near-black
    secondary: '#141414',    // Deep charcoal
    tertiary: '#1a1a1a',     // Slightly lighter charcoal
    elevated: '#1f1f1f',     // Elevated surfaces
  },

  // Surfaces
  surface: {
    default: '#1a1a1a',
    hover: '#242424',
    active: '#2a2a2a',
    pressed: '#2f2f2f',
  },

  // Text
  text: {
    primary: '#ffffff',
    secondary: '#a1a1aa',
    muted: '#71717a',
    disabled: '#52525b',
    inverse: '#0a0a0a',
  },

  // Accent (Emerald Green)
  accent: {
    primary: '#10b981',      // Emerald-500
    hover: '#059669',        // Emerald-600
    active: '#047857',       // Emerald-700
    muted: '#10b98133',      // With transparency
  },

  // Borders
  border: {
    subtle: '#27272a',
    default: '#3f3f46',
    strong: '#52525b',
    focus: '#10b981',
  },

  // States
  state: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Overlays
  overlay: {
    light: 'rgba(0, 0, 0, 0.5)',
    medium: 'rgba(0, 0, 0, 0.7)',
    heavy: 'rgba(0, 0, 0, 0.9)',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },

  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },

  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
} as const;

export const spacing = {
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  8: '2rem',         // 32px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',     // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  full: '9999px',
} as const;

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const sizes = {
  button: {
    sm: '2rem',      // 32px
    md: '2.5rem',    // 40px
    lg: '3rem',      // 48px
  },
  input: {
    sm: '2rem',      // 32px
    md: '2.5rem',    // 40px
    lg: '3rem',      // 48px
  },
  icon: {
    xs: '1rem',      // 16px
    sm: '1.25rem',   // 20px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '2.5rem',    // 40px
  },
  artwork: {
    sm: '2.5rem',    // 40px
    md: '3.5rem',    // 56px
    lg: '5rem',      // 80px
    xl: '8rem',      // 128px
    '2xl': '12rem',  // 192px
  },
  touch: {
    minimum: '3rem', // 48px - Android touch target
  },
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1200,
  popover: 1300,
  tooltip: 1400,
  toast: 1500,
} as const;
