import type { DefaultTheme } from 'styled-components/dist/types'

import type { TextSize } from '../text-types'

export const getFontSize = (theme: DefaultTheme, $size: TextSize) => {
  const { sm, md, lg, xl } = theme.typography.fontSize

  const map = {
    sm,
    md,
    lg,
    xl,
  }

  return map[$size]
}
