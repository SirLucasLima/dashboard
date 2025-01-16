import { RouteObject } from 'react-router-dom'

import { AppLayout } from '@/layouts/app-layout'
import { HomeLayout } from '@/layouts/home-layout'
import { AboutMe } from '@/pages/about-me/about-me'
import { ContactMe } from '@/pages/contact-me/contact-me'
import { Home } from '@/pages/home/home'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/about-me', element: <AboutMe /> },
      { path: '/contact-me', element: <ContactMe /> },
    ],
  },
]
