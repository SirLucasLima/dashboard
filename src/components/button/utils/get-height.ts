import type { ButtonSize } from '../button-types'

export const getHeight = ($size: ButtonSize) => {
  const map = {
    sm: '32px',
    md: '40px',
    lg: '48px',
  }
  return map[$size]
}
