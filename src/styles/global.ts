import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira Mono", serif;
    color: ${({ theme }) => theme.colors.foreground};
  }

  :focus {
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 18px;
    /* line-height: 3.6px; */
    outline: none;
  }
`
