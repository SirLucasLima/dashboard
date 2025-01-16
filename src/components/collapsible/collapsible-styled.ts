import styled, { css } from 'styled-components'

import type { CollapsibleStyledProps } from './collapsible-types'

export const CollapsibleWrapper = styled.div<CollapsibleStyledProps>`
  display: grid;
  opacity: 0;
  ${({ $open, $animation }) => css`
    grid-template-rows: ${$open ? '1fr' : '0fr'};
    opacity: ${$open ? 1 : 0};
    transition: all ${$animation.duration}s ${$animation.ease};
  `}
`

export const CollapsibleInner = styled.div`
  overflow: hidden;
`
