import type { DefaultTheme } from 'styled-components/dist/types'

export const theme: DefaultTheme = {
  colors: {
    background: 'hsl(0 0% 3%)',
    foreground: 'hsl(0 0% 98%)',
    primary: 'hsl(0 0% 10%)',
    primaryForeground: 'hsl(0 0% 85%)',
    secondary: 'hsl(0 0% 98%)',
    secondaryForeground: 'hsl(0 0% 10%)',
    muted: 'hsl(0 0% 15%)',
    mutedForeground: 'hsl(0 0% 65%)',
    destructive: 'hsl(0, 60%, 30%)',
    destructiveForeground: 'hsl(0 0% 98%)',

    // others
    border: 'hsl(0 0% 15%)',
    shadow: 'hsl(240 5.9% 10%)',
    transparent: 'transparent',
    ring: 'hsl(0 0% 30%)',

    // colorful
    // 'colorful-1': 'hsl(45, 90%, 50%)',
    // 'colorful-2': 'hsl(285, 80%, 70%)',
    // 'colorful-3': 'hsl(20, 80%, 55%)',
    // 'colorful-4': 'hsl(160, 60%, 45%)',
    // 'colorful-5': 'hsl(215, 70%, 50%)',
    // 'colorful-6': 'hsl(195, 40%, 25%)',
    // 'colorful-7': 'hsl(260, 65%, 60%)',

    'colorful-1': 'hsl(260, 65%, 60%)',
    'colorful-2': 'hsl(265, 65%, 30%)',
    'colorful-3': 'hsl(265, 80%, 25%)',
    'colorful-4': 'hsl(260, 100%, 70%)',
    'colorful-5': 'hsl(270, 85%, 60%)',
    'colorful-6': 'hsl(260, 100%, 60%)',
    'colorful-7': 'hsl(160, 60%, 45%)',
  },
  border: {
    'rounded-full': '9999px',
    'rounded-sm': '0.125rem',
    'rounded-md': '0.375rem',
    'rounded-lg': '0.5rem',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  typography: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '1.75rem',
      xl: '1',
    },
  },
}
