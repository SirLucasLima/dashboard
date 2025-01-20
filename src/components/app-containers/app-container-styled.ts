import styled from 'styled-components'

export const AppContainersStyled = styled.div`
  width: 100wvh;
  height: 100vh;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  overflow: hidden;

  display: flex;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const SideBarContainerStyled = styled.div`
  width: 15rem;

  display: flex;
  /* visibility: hidden;
  position: fixed; */

  border-right: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const ContentContainerStyled = styled.ul`
  flex: 1;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
