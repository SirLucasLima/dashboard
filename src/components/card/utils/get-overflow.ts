import type { CardOverflow } from '../card-types'

export const getOverflow = ($overflow: CardOverflow) => {
  const overflowMap = {
    hidden: 'hidden',
    scroll: 'scroll',
    auto: 'auto',
  }
  return overflowMap[$overflow]
}
