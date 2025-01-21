import styled from 'styled-components'

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
  padding-right: 0.5rem;

  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.xs};

  background-color: ${({ theme }) => theme.colors.primary};

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  a {
    color: ${({ theme }) => theme.colors.primaryForeground};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  &:hover,
  a:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`
