import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles, { darkTheme } from './styles/global'

import { Home } from './pages/home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ darkTheme }>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
