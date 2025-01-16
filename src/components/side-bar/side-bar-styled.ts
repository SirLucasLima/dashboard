import styled from 'styled-components'

import type { SideBarStyledProps } from './side-bar-types'

export const SideBarStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SideBarGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideBarItemStyled = styled.div<SideBarStyledProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  padding-left: ${({ $isFile }) => ($isFile ? '3rem' : '1rem')};
`
