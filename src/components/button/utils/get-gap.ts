import type { ButtonSize } from '../button-types'

export const getGap = ($size: ButtonSize) => {
  const map = {
    sm: '.5rem',
    md: '.75rem',
    lg: '.75rem',
  }
  return map[$size]
}
