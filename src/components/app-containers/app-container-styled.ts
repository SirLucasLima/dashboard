import styled from 'styled-components'

export const AppContainersStyled = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const SideBarContainerStyled = styled.div`
  width: 15rem;

  display: flex;

  border-right: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const ContentContainerStyled = styled.ul`
  flex: 1;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
