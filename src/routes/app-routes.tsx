import { RouteObject } from 'react-router-dom'

import { AppLayout } from '@/layouts/app-layout'
import { Home } from '@/pages/home/home'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/teste', element: <Home /> },
    ],
  },
]
