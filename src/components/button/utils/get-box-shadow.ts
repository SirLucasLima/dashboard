import type { DefaultTheme } from 'styled-components/dist/types'

import type { ButtonVariant } from '../button-types'

export const getBoxShadow = (theme: DefaultTheme, $variant: ButtonVariant) => {
  const { shadow, shadowForeground, transparent } = theme.colors

  const map = {
    primary: shadowForeground,
    secondary: shadow,
    outline: shadow,
    ghost: transparent,
    destructive: shadow,
    icon: transparent,
  }

  return map[$variant]
}
