import styled, { css } from 'styled-components'

import type { SideMenuButtonTypes } from './types-side-menu'

export const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .wrapper-buttons {
    display: flex;
    flex-direction: column;
  }
`

export const StyledSideMenuButton = styled.div<SideMenuButtonTypes>`
  ${({ theme, $isActive }) => css`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-left: 2px solid ${$isActive ? theme.colors.primaryForeground : theme.colors.transparent};
    color: ${$isActive ? theme.colors.primaryForeground : undefined};

    &:hover {
      color: ${theme.colors.primaryForeground};
    }
  `}
`
