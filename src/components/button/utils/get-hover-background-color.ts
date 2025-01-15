import type { HoverVariant } from '../button-types'

export const getHoverBackgroundColor = ($hover: HoverVariant) => {
  if (!$hover) return undefined

  const map = {
    instagram:
      'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    linkedIn: '#0E76A8',
    github: 'white',
  }

  return map[$hover]
}
