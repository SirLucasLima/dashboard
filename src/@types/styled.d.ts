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
      border: string
      ring: string
      transparent: string
      // colorful
      green: string
      blue: string
      cyan: string
      yellow: string
      orange: string
      rose: string
      purple: string
    }
    radius: string
  }
}
