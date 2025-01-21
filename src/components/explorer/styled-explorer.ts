import styled from 'styled-components'

import type { ExplorerStyledProps } from './types-explorer'

export const StyledExplorer = styled.div`
  padding: 1rem 0.5rem;

  > strong {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.xs};
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  > nav {
    display: flex;
    flex-direction: column;
  }
`

export const StyledExplorerFolder = styled.button<ExplorerStyledProps>`
  width: 100%;
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.border['rounded-sm']};
  cursor: pointer;

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background-color: ${({ theme }) => {
      const hsl = theme.colors.background.replace('hsl(', '').replace(')', '')
      return `hsla(${hsl}, 0.4)`
    }};
  }

  &:focus {
    background-color: ${({ theme }) => {
      const hsl = theme.colors.background.replace('hsl(', '').replace(')', '')
      return `hsla(${hsl}, 0.4)`
    }};

    border: 1px solid ${({ theme }) => theme.colors.ring};
  }

  > span {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.xs};
  }
`
export const StyledExplorerFile = styled.div<ExplorerStyledProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.border['rounded-sm']};
  cursor: pointer;

  padding: 0.25rem 1rem;
  padding-left: 3rem;
  background-color: ${({ $isCurrent, theme }) => {
    const hsl = theme.colors.background.replace('hsl(', '').replace(')', '')
    return $isCurrent ? `hsla(${hsl}, 0.4)` : undefined
  }};
  color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.colors.primaryForeground : undefined)};

  &:hover {
    background-color: ${({ theme }) => {
      const hsl = theme.colors.background.replace('hsl(', '').replace(')', '')
      return `hsla(${hsl}, 0.4)`
    }};
  }

  &:focus {
    background-color: ${({ theme }) => {
      const hsl = theme.colors.background.replace('hsl(', '').replace(')', '')
      return `hsla(${hsl}, 0.4)`
    }};

    border: 1px solid ${({ theme }) => theme.colors.ring};
  }

  > span {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.xs};
  }
`
