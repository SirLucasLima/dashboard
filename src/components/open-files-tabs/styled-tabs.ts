import styled from 'styled-components'

import type { StyledOpenFilesTabsProps } from './types-tabs'

export const StyledOpenFilesTabs = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  overflow-y: hidden;
  height: 1.75rem;
  overflow-y: auto;
`

export const StyledOpenFileTab = styled.div<StyledOpenFilesTabsProps>`
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.border['rounded-lg']};
  cursor: pointer;

  background-color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.colors.muted : 'transparent')};
  color: ${({ $isCurrent, theme }) =>
    $isCurrent ? theme.colors.foreground : theme.colors.mutedForeground};
  border-radius: ${({ theme }) => theme.border['rounded-lg']};

  &:hover {
    background-color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.ring};
  }

  > span {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  }

  .close-button {
    color: ${({ theme }) => theme.colors.mutedForeground};
    border-radius: ${({ theme }) => theme.border['rounded-lg']};

    transition: transform 0.2s ease;
    &:active {
      transform: scale(0.98);
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.muted};
      color: ${({ theme }) => theme.colors.primaryForeground};
    }
  }
`
