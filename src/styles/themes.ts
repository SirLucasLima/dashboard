import type { DefaultTheme } from 'styled-components/dist/types'

export const theme: DefaultTheme = {
  colors: {
    background: 'hsl(246, 23.30%, 11.90%)',
    foreground: 'hsl(0 0% 98%)',
    primary: 'hsl(240 5.9% 10%)',
    primaryForeground: 'hsl(0 0% 98%)',
    secondary: 'hsl(0 0% 98%)',
    secondaryForeground: 'hsl(240 5.9% 10%)',
    muted: 'hsl(240 5.9% 10%)',
    mutedForeground: 'hsl(240 5 44.9)',
    destructive: 'hsl(0, 62.8%, 30.6%)',
    destructiveForeground: 'hsl(0 0% 91)',

    // others
    border: 'hsl(240 5% 14.9%)',
    shadow: 'hsl(240 5.9% 10%)',
    transparent: 'transparent',
    ring: 'hsl(240 4.9% 83.9%)',

    // colorful
    green: 'hsl(160, 60%, 45%)',
    blue: 'hsl(214, 69.00%, 52.00%)',
    cyan: 'hsl(197, 37%, 24%)',
    yellow: 'hsl(45, 89.70%, 50.40%)',
    orange: 'hsl(19, 82.50%, 55.10%)',
    rose: 'hsl(349, 82.60%, 70.80%)',
    purple: 'hsl(263, 69.00%, 52.00%)',
  },
  border: {
    radius: '0.5rem',
    circle: '50%',
  },

  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  typography: {
    fontSize: {
      // xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      // '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '3.75rem',
      // '7xl': '4.5rem',
      // '8xl': '6rem',
      // '9xl': '8rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      sm: '1.25rem',
      md: '1.5rem',
      lg: '1.75rem',
      xl: '1.75rem',
    },
  },
}
