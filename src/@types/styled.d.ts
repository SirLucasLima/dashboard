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
      green: string
      blue: string
      cyan: string
      yellow: string
      orange: string
      rose: string
      purple: string
    }
    border: {
      radius: string
      circle: string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    typography: {
      fontSize: {
        sm: string
        md: string
        lg: string
        xl: string
      }
      fontWeight: {
        normal: number
        medium: number
        bold: number
      }
      lineHeight: {
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
  }
}
