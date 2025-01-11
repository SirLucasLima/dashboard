import type { ButtonSize } from '../button-types'

export const getIconSize = (size: ButtonSize) => {
  const iconSizeMap = {
    sm: '14',
    md: '16',
    lg: '20',
  }
  return iconSizeMap[size]
}
