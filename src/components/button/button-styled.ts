import styled, { css } from 'styled-components'

import type { ButtonStylesProps } from './button-types'
import { getBackgroundColor } from './utils/get-background-color'
import { getBorderColor } from './utils/get-border-color'
import { getFontSize } from './utils/get-font-size'
import { getGap } from './utils/get-gap'
import { getHeight } from './utils/get-height'
import { getTextColor } from './utils/get-text-color'

export const ButtonStyled = styled.button<ButtonStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.5rem 1rem;
  border: none;
  width: auto;
  cursor: pointer;
  transition: filter 0.2s;

  ${({ theme, $variant }) => css`
    background-color: ${getBackgroundColor(theme, $variant)};
    color: ${getTextColor(theme, $variant)};
    border: 0.5px solid ${getBorderColor(theme, $variant)};
  `}

  ${({ $disabled, $loading }) =>
    ($disabled || $loading) &&
    css`
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    `}

  ${({ $size }) => css`
    gap: ${getGap($size)};
    height: ${getHeight($size)};
    font-size: ${getFontSize($size)};
  `}

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.98);
  }

  &:active:after {
    transform: scale(0.98);
  }
`
