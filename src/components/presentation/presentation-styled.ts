import styled from 'styled-components'

export const PresentationStyled = styled.div`
  z-index: 10;
  position: fixed;

  top: 50%;
  left: 15rem;
  transform: translate(0, -50%);

  display: flex;
  flex-direction: column;
  gap: 2rem;
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
