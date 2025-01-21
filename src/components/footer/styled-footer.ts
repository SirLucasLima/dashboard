import styled from 'styled-components'

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
  padding-right: 0.5rem;

  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.xs};

  background-color: ${({ theme }) => theme.colors.background};

  a {
    color: ${({ theme }) => theme.colors.mutedForeground};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`
