import type { DefaultTheme } from 'styled-components/dist/types'

import type { TextVariant } from '../text-types'

export const getHoverColor = (theme: DefaultTheme, $variant: TextVariant) => {
  const { primaryForeground } = theme.colors

  const map = {
    text: undefined,
    variable: undefined,
    tag: undefined,
    comment: undefined,
    title: undefined,
    subtitle: undefined,
    list: primaryForeground,
    link: undefined,
  }

  return map[$variant]
}
