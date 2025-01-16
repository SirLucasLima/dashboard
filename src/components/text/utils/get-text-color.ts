import type { DefaultTheme } from 'styled-components/dist/types'

import type { TextVariant } from '../text-types'

export const getTextColor = (theme: DefaultTheme, $variant: TextVariant) => {
  const { primaryForeground, mutedForeground, blue, green, rose, cyan } = theme.colors

  const map = {
    text: primaryForeground,
    variable: blue,
    tag: rose,
    comment: cyan,
    title: primaryForeground,
    subtitle: green,
    list: mutedForeground,
    link: green,
  }

  return map[$variant]
}
