import styled from 'styled-components'

export const BottomStyled = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;

  height: 2.5rem;
  width: 100vw;

  display: flex;
  border-top: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const TitleContainerStyled = styled.div`
  width: auto;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const TabsListContainerStyled = styled.ul`
  width: 100%;
  overflow: hidden;

  display: flex;

  border-right: 0.5px solid ${({ theme }) => theme.colors.border};

  > li {
    width: auto;
    overflow: hidden;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 0.5px solid ${({ theme }) => theme.colors.border};
  }
`

export const CurriculumContainerStyled = styled.a`
  width: 15rem;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
