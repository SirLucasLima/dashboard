import type { ButtonSize } from '../button-types'

export const getFontSize = ($size: ButtonSize) => {
  const fontSizeMap = {
    sm: '12px',
    md: '14px',
    lg: '16px',
  }
  return fontSizeMap[$size]
}
