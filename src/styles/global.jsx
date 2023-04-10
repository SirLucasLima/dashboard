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

  body {
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.rose};
    -webkit-font-smoothing: antialised;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    transition: filter 0.2s;
  }
  
  button {
    cursor: pointer;
    transition: filter 0.2s;
    outline: none;
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  span, input{
    text-align: center;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3.6rem;
    outline: none;

    color: ${({theme}) => theme.textColorSoft};
  }
  
  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;

    color: ${({theme}) => theme.textColor};
  }

  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;

    text-align: justify;
    text-indent: 4rem;

    color: ${({theme}) => theme.textColorSoft};
  }

  i {
    font-size: 2rem;
    line-height: 3rem;
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

