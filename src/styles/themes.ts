import type { DefaultTheme } from 'styled-components/dist/types'

export const lightTheme: DefaultTheme = {
  colors: {
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(240 10% 3.9%)',
    primary: 'hsl(240 5.9% 10%)',
    primaryForeground: 'hsl(0 0% 98%)',
    secondary: 'hsl(240 4.8% 95.9%)',
    secondaryForeground: 'hsl(240 5.9% 10%)',
    muted: 'hsl(2240 4.8% 95.9%)',
    mutedForeground: 'hsl(240 3.8% 46.1%)',
    destructive: 'hsl(0, 84.2%, 60.2%)',
    destructiveForeground: 'hsl(0 0% 98%)',
    border: 'hsl(240 5.9% 90)',
    transparent: 'transparent',
    ring: 'hsl(240 5.9% 10%)',

    // shadow
    shadow: 'hsl(240 10% 3.9%)',
    shadowForeground: 'hsl(240 3.8% 46.1%)',

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
    radius: '1.5rem',
    circle: '50%',
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
      // light: 300,
      normal: 400,
      medium: 500,
      // semibold: 600,
      bold: 700,
    },
    lineHeight: {
      sm: 1,
      md: 1.4,
      lg: 1.5,
      xl: 1.6,
    },
  },
}

export const darkTheme: DefaultTheme = {
  colors: {
    background: 'hsl(240 10% 3.9%)',
    foreground: 'hsl(0 0% 98%)',
    primary: 'hsl(240 5.9% 10%)',
    primaryForeground: 'hsl(0 0% 98%)',
    secondary: 'hsl(0 0% 98%)',
    secondaryForeground: 'hsl(240 5.9% 10%)',
    muted: 'hsl(240 5.9% 10%)',
    mutedForeground: 'hsl(240 5 44.9)',
    destructive: 'hsl(0, 62.8%, 30.6%)',
    destructiveForeground: 'hsl(0 0% 91)',
    border: 'hsl(0 0 15)',
    transparent: 'transparent',
    ring: 'hsl(240 4.9% 83.9%)',

    // shadow
    shadow: 'hsl(240 5% 14.9%)',
    shadowForeground: 'hsl(240 5.9% 10%)',

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
    radius: '1rem',
    circle: '50%',
  },
  typography: {
    fontSize: {
      // xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '3rem',
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
      // light: 300,
      normal: 400,
      medium: 500,
      // semibold: 600,
      bold: 700,
    },
    lineHeight: {
      sm: 1,
      md: 1.4,
      lg: 1.5,
      xl: 1.6,
    },
  },
}

// colorful variants
// color1: 'hsl(173, 58%, 39%)',
// color4: 'hsl(43, 74%, 66%)',
// color5: 'hsl(27, 87%, 67%)',
// color5: 'hsl(30, 80%, 55%)',
// color6: 'hsl(340, 75%, 55%)',
// color7: 'hsl(280, 65%, 60%)',
