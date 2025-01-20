import { Explorer } from '../explorer/_index'
import { Footer } from '../footer/_index'
import { Header } from '../header/_index'
import { SideMenu } from '../side-menu/_index'
import { AppLayoutStyled, EditorLayoutStyled } from './app-container-styled'
import type { AppContainersProps } from './app-container-types'

export const AppContainers = ({ children }: AppContainersProps) => {
  return (
    <AppLayoutStyled>
      <Header />
      <EditorLayoutStyled>
        <SideMenu />
        <Explorer />
        <div>{children}</div>
      </EditorLayoutStyled>
      <Footer />
    </AppLayoutStyled>
  )
}
