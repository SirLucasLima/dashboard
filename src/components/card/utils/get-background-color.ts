import type { DefaultTheme } from 'styled-components/dist/types'

import type { CardVariant } from '../card-types'

export const getBackgroundColor = (theme: DefaultTheme, $variant: CardVariant) => {
  const { primary, secondary, green, blue, cyan, yellow, orange, rose, purple } = theme.colors

  const colorMap = {
    primary,
    secondary,
    green,
    blue,
    cyan,
    yellow,
    orange,
    rose,
    purple,
  }

  return colorMap[$variant]
}
