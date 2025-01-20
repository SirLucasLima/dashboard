import styled, { css } from 'styled-components'

import type { TextStyledProps } from './text-types'
import { getFontSize } from './utils/get-font-size'
import { getFontWeight } from './utils/get-font-weight'
import { getHoverColor } from './utils/get-hover-color'
import { getHoverOpacity } from './utils/get-hover-opacity'
import { getTextColor } from './utils/get-text-color'

export const TextStyled = styled.div<TextStyledProps>`
  display: ${({ as }) => (as === 'span' ? 'inline' : 'flex')};
  align-items: center;
  gap: 1rem;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ theme, $size, $variant }) => css`
    .content {
      color: ${getTextColor(theme, $variant)};
      font-weight: ${getFontWeight(theme, $variant)};
      font-size: ${getFontSize(theme, $size)};
    }

    svg {
      display: flex;
      align-items: center;
      stroke: ${getTextColor(theme, $variant)};
      width: ${getFontSize(theme, $size)};
    }

    &:hover {
      .content {
        color: ${getHoverColor(theme, $variant)};
        opacity: ${getHoverOpacity($variant)};
      }

      svg {
        stroke: ${getHoverColor(theme, $variant)};
        opacity: ${getHoverOpacity($variant)};
      }
    }
  `}

  > .middle {
    flex: 1;
    text-align: left;
  }

  > .appendIcon {
    margin-left: auto;
  }
`
