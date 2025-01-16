import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { AppContainers } from '@/components/app-containers/_index'
import { Bottom } from '@/components/bottom/_index'
import { Header } from '@/components/header/_index'

const AppLayoutStyled = styled.div`
  width: 100wvh;
  height: 100vh;
  overflow: hidden;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`

export function AppLayout() {
  return (
    <>
      <Header />
      <AppLayoutStyled>
        <AppContainers>
          <Outlet />
        </AppContainers>
      </AppLayoutStyled>
      <Bottom />
    </>
  )
}
