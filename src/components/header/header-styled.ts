import styled from 'styled-components'

export const HeaderStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;

  height: 2.5rem;
  width: 100vw;

  display: flex;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const TitleContainerStyled = styled.div`
  width: 15rem;
  padding: 1rem;

  display: flex;
  align-items: center;

  border-right: 0.5px solid ${({ theme }) => theme.colors.border};
`

export const TabsListContainerStyled = styled.ul`
  flex: 1;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;

  border-right: 0.5px solid ${({ theme }) => theme.colors.border};

  > li {
    width: auto;
    overflow: hidden;
    padding: 1rem;

    display: flex;
    align-items: center;

    border-right: 0.5px solid ${({ theme }) => theme.colors.border};
  }
`

export const ContactContainerStyled = styled.a`
  margin-left: auto;
  width: auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
