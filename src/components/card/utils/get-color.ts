import type { DefaultTheme } from 'styled-components/dist/types'

import type { CardVariant } from '../card-types'

export const getColor = (theme: DefaultTheme, $variant: CardVariant) => {
  const { primaryForeground, secondaryForeground } = theme.colors

  const colorMap = {
    primary: primaryForeground,
    secondary: primaryForeground,
    green: primaryForeground,
    blue: primaryForeground,
    cyan: primaryForeground,
    yellow: secondaryForeground,
    orange: secondaryForeground,
    rose: secondaryForeground,
    purple: primaryForeground,
  }

  return colorMap[$variant]
}
