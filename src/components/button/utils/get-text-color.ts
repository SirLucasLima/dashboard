import type { DefaultTheme } from 'styled-components/dist/types'

import type { ButtonVariant } from '../button-types'

export const getTextColor = (theme: DefaultTheme, $variant: ButtonVariant) => {
  const { primaryForeground, secondaryForeground, destructiveForeground } = theme.colors

  const textColorMap = {
    primary: primaryForeground,
    secondary: secondaryForeground,
    outline: secondaryForeground,
    ghost: secondaryForeground,
    destructive: destructiveForeground,
  }
  return textColorMap[$variant]
}
