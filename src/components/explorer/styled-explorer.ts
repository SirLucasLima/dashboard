import styled from 'styled-components'

import type { StyledExplorerFolderProps, StyledExplorerProps } from './types-explorer'

export const StyledExplorer = styled.div<StyledExplorerProps>`
  padding: 0 0.5rem;
  margin-left: 3.5rem;
  height: 100%;
  width: 16rem;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
  transform: translateX(${({ $isExplorerOpened }) => ($isExplorerOpened ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mutedForeground};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  > nav {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const StyledExplorerFolder = styled.button<StyledExplorerFolderProps>`
  width: 100%;
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.border['rounded-lg']};
  cursor: pointer;

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
`

export const StyledExplorerFile = styled.div<StyledExplorerFolderProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.border['rounded-sm']};
  cursor: pointer;

  padding: 0.25rem 1rem;
  padding-left: 3rem;

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
`
