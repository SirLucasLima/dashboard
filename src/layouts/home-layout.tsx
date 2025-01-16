import { Outlet } from 'react-router-dom'

import { Bottom } from '@/components/bottom/_index'
import { Header } from '@/components/header/_index'

export function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Bottom />
    </>
  )
}
