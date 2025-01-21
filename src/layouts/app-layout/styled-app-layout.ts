import styled, { css } from 'styled-components'

import type { StyledContentProps } from './types-app-layout'

export const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2rem 1fr 1.5rem;
`

export const StyledEditorLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3.5rem 1fr;
  max-height: 100%;
`

export const StyledContent = styled.div<StyledContentProps>`
  ${({ theme, $isExplorerOpened }) => css`
    overflow-y: scroll;

    @media (min-width: ${theme.breakpoints.xl}) {
      margin-left: ${$isExplorerOpened ? '16rem' : '0'};
      transition: margin-left 0.3s ease-in-out;
    }
  `}
`
