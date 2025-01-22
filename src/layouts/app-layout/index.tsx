import { Outlet } from 'react-router-dom'

import { StyledAppContainer } from '@/components/app-container/styled-app-container'
import { Explorer } from '@/components/explorer'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { OpenFilesTabs } from '@/components/open-files-tabs'
import { SideMenu } from '@/components/side-menu'
import { useExplorerStore } from '@/store/use-explorer-store'

import {
  StyledAppLayout,
  StyledContent,
  StyledEditorLayout,
  StyledOutlet,
} from './styled-app-layout'

export function AppLayout() {
  const isExplorerOpened = useExplorerStore(state => state.isExplorerOpened)

  return (
    <>
      <StyledAppContainer>
        <StyledAppLayout>
          <Header />
          <StyledEditorLayout>
            <SideMenu />
            <Explorer />
            <StyledContent $isExplorerOpened={isExplorerOpened}>
              <OpenFilesTabs />
              <StyledOutlet>
                <Outlet />
              </StyledOutlet>
            </StyledContent>
          </StyledEditorLayout>
          <Footer />
        </StyledAppLayout>
      </StyledAppContainer>
    </>
  )
}
