import type { DefaultTheme } from 'styled-components/dist/types'

import type { ButtonVariant } from '../button-types'

export const getBorderRadius = (theme: DefaultTheme, $variant: ButtonVariant) => {
  const { radius, circle } = theme.border

  const map = {
    primary: radius,
    secondary: radius,
    outline: radius,
    ghost: radius,
    destructive: radius,
    icon: circle,
  }

  return map[$variant]
}
