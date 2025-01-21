import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};

  color: ${({ theme }) => theme.colors.mutedForeground};
  background-color: ${({ theme }) => theme.colors.background};

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

  background-color: transparent;
  border-radius: ${({ theme }) => theme.border['rounded-lg']};

  transition: transform 0.2s ease;

  &:active {
    transform: scale(1.3);
  }

  &:hover {
    background-color: ${({ theme }) => {
      const hsl = theme.colors.primary.replace('hsl(', '').replace(')', '')
      return `hsla(${hsl}, 0.4)`
    }};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`
