import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { BackgroundGradient } from './components/background-gradient'
import { router } from './routes/router'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BackgroundGradient />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
