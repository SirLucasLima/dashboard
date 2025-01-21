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
    background: ${({ theme }) => theme.colors.cyan};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: "Fira Mono", serif;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
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
    color: inherit;
    background-color: inherit;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 18px;
    outline: none;
  }

  button {
    color: inherit;
    background-color: inherit;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    cursor: pointer;
  }
`
