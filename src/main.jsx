import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles, { darkTheme } from './styles/global'

import { AppRoutes } from './routes/app.routes'
import { SkillContextProvider } from './context/SkillContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkillContextProvider>
      <ThemeProvider theme={ darkTheme }>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </SkillContextProvider>
  </React.StrictMode>,
)
