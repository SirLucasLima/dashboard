import type { DefaultTheme } from 'styled-components/dist/types'

import type { ButtonVariant } from '../button-types'

export const getBackgroundColor = (theme: DefaultTheme, $variant: ButtonVariant) => {
  const { primary, secondary, transparent, destructive } = theme.colors

  const colorMap = {
    primary: primary,
    secondary: secondary,
    outline: transparent,
    ghost: transparent,
    destructive: destructive,
  }

  return colorMap[$variant]
}
