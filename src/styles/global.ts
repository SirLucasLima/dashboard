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
    color: ${({ theme }) => theme.colors.primaryForeground};
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
    font-family: "Fira Mono", serif;
  }

  .shiki {
    white-space: pre-wrap;
    word-wrap: break-word;
    counter-reset: line;
  }

  .shiki .line {
    display: inline-block;
    position: relative;
    padding-left: 2rem;
    padding-right: 0.25rem;
    counter-increment: line;
  }

  .shiki .line::before {
    content: counter(line);
    position: absolute;
    left: 0;                   /* line number in the left gutter */
    top: 0;                    /* align with the top of the line */
    width: 1.5rem;               /* gutter width for line number */
    text-align: right;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  code {
    font-family: "Fira Mono", serif;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  }

`
