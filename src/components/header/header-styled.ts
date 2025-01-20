import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};

  color: ${({ theme }) => theme.colors.mutedForeground};

  .traffic-light-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .red-traffic-light,
  .yellow-traffic-light,
  .green-traffic-light {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: ${({ theme }) => theme.border.circle};
  }

  .red-traffic-light {
    background-color: #ed6a5e;
  }
  .yellow-traffic-light {
    background-color: #f4bf4f;
  }
  .green-traffic-light {
    background-color: #61c554;
  }

  .empty-space {
    width: 3.5rem;
  }
`
