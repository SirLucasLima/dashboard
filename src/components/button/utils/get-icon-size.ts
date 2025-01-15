import type { ButtonSize } from '../button-types'

export const getIconSize = (size: ButtonSize) => {
  const map = {
    sm: '18',
    md: '24',
    lg: '28',
  }
  return map[size]
}
