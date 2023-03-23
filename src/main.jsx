import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles, { darkTheme } from './styles/global'

import { AppRoutes } from './routes/app.routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ darkTheme }>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
