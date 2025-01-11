import type { ButtonSize } from '../button-types'

export const getGap = ($size: ButtonSize) => {
  const gapMap = {
    sm: '.5rem',
    md: '.75rem',
    lg: '.75rem',
  }
  return gapMap[$size]
}
