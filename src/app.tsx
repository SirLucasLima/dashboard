import { ThemeProvider } from 'styled-components'

import { Home } from './pages/home/home'
import { useAppSelector } from './store/store'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/themes'

export const App = () => {
  const isDark = useAppSelector(state => state.theme.isDark)
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}
