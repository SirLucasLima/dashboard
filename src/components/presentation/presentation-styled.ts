import styled from 'styled-components'

export const PresentationStyled = styled.div`
  z-index: 10;
  position: fixed;

  top: 50%;
  left: 20rem;
  transform: translate(-10%, -50%);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PresentationContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
`

export const PresentationName = styled.div`
  display: flex;
  flex-direction: column;
`

export const PresentationInfo = styled.a`
  display: flex;
  flex-direction: column;
`

export const PresentationInfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
`
