import styled, { css } from 'styled-components'

import type { TextStyledProps } from './text-types'
import { getFontSize } from './utils/get-font-size'
import { getFontWeight } from './utils/get-font-weight'
import { getHoverColor } from './utils/get-hover-color'
import { getHoverOpacity } from './utils/get-hover-opacity'
import { getTextColor } from './utils/get-text-color'

export const TextStyled = styled.div<TextStyledProps>`
  ${({ theme, $variant }) => css`
    color: ${getTextColor(theme, $variant)};
    font-weight: ${getFontWeight(theme, $variant)};

    &:hover {
      color: ${getHoverColor(theme, $variant)};
      opacity: ${getHoverOpacity($variant)};
    }
  `}

  ${({ theme, $size }) => css`
    font-size: ${getFontSize(theme, $size)};
  `}
`
