import type { ReactNode } from 'react'

import { AppLayout } from '@/layouts/app-layout'
import { HomeLayout } from '@/layouts/home-layout'
import { AboutMe } from '@/pages/about-me/about-me'
import { ContactMe } from '@/pages/contact-me/contact-me'
import { Home } from '@/pages/home/home'
import { MyHobbies } from '@/pages/my-hobbies/my-hobbies'

export interface RouteChildConfig {
  path: string
  text: string
  element: ReactNode
  isContact?: boolean
  showInSidebar?: boolean
  showInHeader?: boolean
}

export interface RouteGroupConfig {
  path: string
  folderText?: string
  element?: ReactNode
  children?: RouteChildConfig[]
  showFolderInSidebar?: boolean
}

export const routeConfig: RouteGroupConfig[] = [
  {
    path: '',
    folderText: 'home-folder',
    element: <HomeLayout />,
    showFolderInSidebar: false,
    children: [
      {
        path: '',
        text: 'home.ts',
        element: <Home />,
        showInHeader: true,
        showInSidebar: false,
      },
    ],
  },
  {
    path: 'me',
    folderText: 'about-me',
    element: <AppLayout />,
    showFolderInSidebar: true,
    children: [
      {
        path: 'about',
        text: 'about-me.ts',
        element: <AboutMe />,
        showInSidebar: true,
        showInHeader: true,
      },
      {
        path: 'hobbies',
        text: 'my-hobbies.ts',
        element: <MyHobbies />,
        showInSidebar: true,
      },
    ],
  },
  {
    path: 'she',
    folderText: 'contact-me',
    element: <AppLayout />,
    showFolderInSidebar: true,
    children: [
      {
        path: 'contact',
        text: 'contact-me.ts',
        element: <ContactMe />,
        isContact: true,
        showInSidebar: true,
        showInHeader: false,
      },
    ],
  },
  // {
  //   path: 'projects',
  //   folderText: 'my-projects',
  //   element: <AppLayout />,
  //   showFolderInSidebar: true,
  //   children: [
  //     {
  //       path: 'about',
  //       text: 'about-me.ts',
  //       element: <AboutMe />,
  //       showInSidebar: true,
  //       showInHeader: false,
  //     },
  //     {
  //       path: 'hobbies',
  //       text: 'my-hobbies.ts',
  //       element: <MyHobbies />,
  //       showInSidebar: true,
  //     },
  //     {
  //       path: 'contact',
  //       text: 'contact-me.ts',
  //       element: <ContactMe />,
  //       isContact: true,
  //       showInSidebar: false,
  //       showInHeader: false,
  //     },
  //   ],
  // },
]
