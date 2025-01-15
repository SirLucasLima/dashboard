import styled, { css } from 'styled-components'

import type { CardStylesProps } from './card-types'
import { getBackgroundColor } from './utils/get-background-color'
import { getColor } from './utils/get-color'

export const CardStyled = styled.div<CardStylesProps>`
  border-radius: ${({ theme }) => theme.round.radius};
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow: $overflow;
  padding: ${({ $padding }) => ($padding ? '1rem' : '0')};

  ${({ theme, $variant }) => css`
    background-color: ${getBackgroundColor(theme, $variant)};
    color: ${getColor(theme, $variant)};
  `}
`
