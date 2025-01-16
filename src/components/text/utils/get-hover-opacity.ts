import type { TextVariant } from '../text-types'

export const getHoverOpacity = ($variant: TextVariant) => {
  const map = {
    text: undefined,
    variable: undefined,
    tag: undefined,
    comment: undefined,
    title: undefined,
    subtitle: undefined,
    list: undefined,
    link: 0.8,
  }

  return map[$variant]
}
