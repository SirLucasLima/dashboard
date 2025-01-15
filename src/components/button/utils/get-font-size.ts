import type { ButtonSize } from '../button-types'

export const getFontSize = ($size: ButtonSize) => {
  const map = {
    sm: '12px',
    md: '14px',
    lg: '16px',
  }
  return map[$size]
}
