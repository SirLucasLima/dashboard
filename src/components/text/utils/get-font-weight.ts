import type { DefaultTheme } from 'styled-components/dist/types'

import type { TextVariant } from '../text-types'

export const getFontWeight = (theme: DefaultTheme, $variant: TextVariant) => {
  const { normal, medium } = theme.typography.fontWeight

  const map = {
    text: normal,
    variable: normal,
    tag: normal,
    comment: normal,
    title: medium,
    subtitle: medium,
    list: normal,
    link: medium,
  }

  return map[$variant]
}
