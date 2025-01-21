import styled, { css } from 'styled-components'

import type { StyledMenuButtonProps, StyledSocialLinksProps } from './types-side-menu'

export const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mutedForeground};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  .wrapper-buttons {
    display: flex;
    flex-direction: column;
  }
`

export const StyledMenuButton = styled.button<StyledMenuButtonProps>`
  ${({ theme, $isActive }) => css`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-left: 2px solid ${$isActive ? theme.colors.foreground : theme.colors.transparent};
    color: ${$isActive ? theme.colors.foreground : undefined};

    &:hover {
      color: ${theme.colors.foreground};
    }
  `}
`

export const StyledSocialLinks = styled.div<StyledSocialLinksProps>`
  ${({ theme, $isOpen }) => css`
    position: absolute;
    bottom: 0;
    left: 3.5rem;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    display: ${$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    box-shadow: 0px 2px 4px ${theme.colors.shadow};
    overflow: hidden;
    z-index: 10;
    border: 1px solid ${theme.colors.ring};
  `}
`

export const StyledSocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.muted};
  }
`
