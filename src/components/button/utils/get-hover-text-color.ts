import type { DefaultTheme } from 'styled-components/dist/types'

import type { HoverVariant } from '../button-types'

export const getHoverTextColor = (theme: DefaultTheme, $hover: HoverVariant) => {
  if (!$hover) return undefined
  const { primaryForeground, secondaryForeground } = theme.colors

  const map = {
    instagram: secondaryForeground,
    linkedIn: secondaryForeground,
    github: primaryForeground,
  }

  return map[$hover]
}
