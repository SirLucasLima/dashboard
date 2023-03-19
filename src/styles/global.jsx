import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    color: ${({theme}) => theme.rose};
  }
  
  :root{
    font-size: 62.5%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }

  span {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3.6rem;

    color: ${({theme}) => theme.textColorSoft};
  }
  
  h1 {
    font-weight: 700;
    font-size: 2.4rem;

    color: ${({theme}) => theme.textColor};
  }
`

export const darkTheme = {
  purple: '#7C05F2',
  rose: '#FE6D79',
  yellow: '#FFC03C',
  green: '#00C39A',
  
  textColor: '#F5F5F5',
  textColorSoft: '#D3D3D3',

  links: '#202020',
  bg: '#000000',
  bgSoft: '#151515',
}

