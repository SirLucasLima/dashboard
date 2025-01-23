import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      foreground: string
      primary: string
      primaryForeground: string
      secondary: string
      secondaryForeground: string
      muted: string
      mutedForeground: string
      destructive: string
      destructiveForeground: string
      shadow: string
      border: string
      ring: string
      transparent: string
      'colorful-1': string
      'colorful-2': string
      'colorful-3': string
      'colorful-4': string
      'colorful-5': string
      'colorful-6': string
      'colorful-7': string
    }
    border: {
      'rounded-full': string
      'rounded-sm': string
      'rounded-md': string
      'rounded-lg': string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    typography: {
      fontSize: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '3xl': string
        '4xl': string
        '5xl': string
        '6xl': string
        '7xl': string
        '8xl': string
        '9xl': string
      }
      fontWeight: {
        normal: number
        medium: number
        semibold: number
        bold: number
      }
      lineHeight: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
  }
}
