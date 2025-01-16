import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: "Fira Mono", serif;
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ul {
    list-style: none;
  }

  l1, a {
    cursor: pointer;
    text-decoration: none;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 18px;
    outline: none;
  }
`
