import { Outlet } from 'react-router-dom'

import { StyledAppContainer } from '@/components/app-container/styled-app-container'
import { BackgroundGradient } from '@/components/background-gradient'
import { Explorer } from '@/components/explorer'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { SideMenu } from '@/components/side-menu'

import { EditorLayoutStyled, StyledAppLayout } from './styled-app-layout'

export function AppLayout() {
  return (
    <>
      <StyledAppContainer>
        <StyledAppLayout>
          <Header />
          <EditorLayoutStyled>
            <SideMenu />
            <Explorer />
            <div>
              <Outlet />
            </div>
          </EditorLayoutStyled>
          <Footer />
        </StyledAppLayout>
      </StyledAppContainer>
      <BackgroundGradient />
    </>
  )
}
