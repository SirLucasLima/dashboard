import type { DefaultTheme } from 'styled-components/dist/types'

import type { ButtonVariant } from '../button-types'

export const getBackgroundColor = (theme: DefaultTheme, $variant: ButtonVariant) => {
  const { primary, secondary, transparent, destructive } = theme.colors

  const map = {
    primary: primary,
    secondary: secondary,
    outline: transparent,
    ghost: transparent,
    destructive: destructive,
    icon: transparent,
  }

  return map[$variant]
}
