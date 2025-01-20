import styled from 'styled-components'

export const AboutMeLayoutStyled = styled.div`
  height: 100%;
  display: flex;
`

export const AboutMeContentStyled = styled.div`
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: start;
  white-space: pre-wrap;

  overflow-y: auto;

  p,
  h1,
  span {
    line-height: 32.5px;
  }
`
