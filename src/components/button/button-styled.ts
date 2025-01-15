import styled, { css } from 'styled-components'

import type { ButtonStylesProps } from './button-types'
import { getBackgroundColor } from './utils/get-background-color'
import { getBorderColor } from './utils/get-border-color'
import { getBorderRadius } from './utils/get-border-radius'
import { getBoxShadow } from './utils/get-box-shadow'
import { getFontSize } from './utils/get-font-size'
import { getGap } from './utils/get-gap'
import { getHeight } from './utils/get-height'
import { getHoverBackgroundColor } from './utils/get-hover-background-color'
import { getHoverTextColor } from './utils/get-hover-text-color'
import { getTextColor } from './utils/get-text-color'

export const ButtonStyled = styled.button<ButtonStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  width: auto;
  cursor: pointer;
  transition: filter 0.2s;

  ${({ theme, $variant }) => css`
    background: ${getBackgroundColor(theme, $variant)};
    color: ${getTextColor(theme, $variant)};
    box-shadow: 4px 4px 4px ${getBoxShadow(theme, $variant)};
    border: 0.5px solid ${getBorderColor(theme, $variant)};
    border-radius: ${getBorderRadius(theme, $variant)};
  `}

  ${({ $disabled, $loading }) =>
    ($disabled || $loading) &&
    css`
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    `}

  ${({ $size, $variant }) => css`
    gap: ${getGap($size)};
    height: ${$variant === 'icon' ? '50px' : getHeight($size)};
    width: ${$variant === 'icon' ? '50px' : 'auto'};
    padding: ${$variant === 'icon' ? '0' : '0.5rem 1rem;'};
    font-size: ${getFontSize($size)};
  `}

  &:hover {
    filter: brightness(0.9);
    ${({ theme, $hover }) =>
      $hover &&
      css`
        background: ${getHoverBackgroundColor($hover)};
        color: ${getHoverTextColor(theme, $hover)};
      `}
  }

  &:active {
    transform: scale(0.98);
  }

  &:active:after {
    transform: scale(0.98);
  }
`
