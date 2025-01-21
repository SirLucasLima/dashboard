import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mutedForeground};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  .empty-space {
    width: 1rem;
  }
`

export const StyledCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.mutedForeground};

  border-radius: ${({ theme }) => theme.border['rounded-lg']};

  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.98);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`
