import { Outlet } from 'react-router-dom'

import { AppContainers } from '@/components/app-containers/_index'
import { Bottom } from '@/components/bottom/_index'
import { Header } from '@/components/header/_index'

export function AppLayout() {
  return (
    <>
      <Header />
      <AppContainers>
        <Outlet />
      </AppContainers>
      <Bottom />
    </>
  )
}
