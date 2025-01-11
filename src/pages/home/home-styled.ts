import styled from 'styled-components'

import type { GridStylesProps } from './home-types'

export const HomeStyled = styled.div`
  overflow: hidden;
  max-width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(24, 1fr); /* 24 colunas iguais */
  grid-template-rows: repeat(12, 1fr); /* 12 linhas iguais */
  gap: 1rem;
`

export const GridItem = styled.div<GridStylesProps>`
  grid-column: span ${({ $colSpan }) => $colSpan || 1};
  grid-row: span ${({ $rowSpan }) => $rowSpan || 1};
`
