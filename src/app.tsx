import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from './routes/router'
import { useAppSelector } from './store/store'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/themes'

export const App = () => {
  const isDark = useAppSelector(state => state.theme.isDark)
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
