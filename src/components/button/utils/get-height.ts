import type { ButtonSize } from '../button-types'

export const getHeight = ($size: ButtonSize) => {
  const heightMap = {
    sm: '32px',
    md: '40px',
    lg: '48px',
  }
  return heightMap[$size]
}
