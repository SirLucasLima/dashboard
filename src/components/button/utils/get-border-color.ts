import type { DefaultTheme } from 'styled-components/dist/types'

import type { ButtonVariant } from '../button-types'

export const getBorderColor = (theme: DefaultTheme, $variant: ButtonVariant) => {
  const { ring, transparent } = theme.colors

  const map = {
    primary: transparent,
    secondary: transparent,
    outline: ring,
    ghost: transparent,
    destructive: transparent,
    icon: transparent,
  }
  return map[$variant]
}
