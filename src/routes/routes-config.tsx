import type { ReactNode } from 'react'

import { AppLayout } from '@/layouts/app-layout'
import { AboutMe } from '@/pages/about-me/about-me'
import { ContactMe } from '@/pages/contact-me/contact-me'
import { Home } from '@/pages/home/home'
import { MyHobbies } from '@/pages/my-hobbies/my-hobbies'

export interface RouteChildConfig {
  path: string
  text: string
  element: ReactNode
  showInExplorer?: boolean
  // showInHeader?: boolean
}

export interface RouteGroupConfig {
  path: string
  folderText?: string
  element?: ReactNode
  children?: RouteChildConfig[]
  showFolderInExplorer?: boolean
}

export const routeConfig: RouteGroupConfig[] = [
  {
    path: '',
    folderText: 'home-folder',
    element: <AppLayout />,
    showFolderInExplorer: false,
    children: [
      {
        path: '',
        text: 'home.ts',
        element: <Home />,
        showInExplorer: false,
      },
    ],
  },
  {
    path: 'me',
    folderText: 'about-me',
    element: <AppLayout />,
    showFolderInExplorer: true,
    children: [
      {
        path: 'about',
        text: 'about-me.ts',
        element: <AboutMe />,
        showInExplorer: true,
      },
      {
        path: 'hobbies',
        text: 'my-hobbies.ts',
        element: <MyHobbies />,
        showInExplorer: true,
      },
    ],
  },
  {
    path: 'she',
    folderText: 'contact-me',
    element: <AppLayout />,
    showFolderInExplorer: true,
    children: [
      {
        path: 'contact',
        text: 'contact-me.ts',
        element: <ContactMe />,
        showInExplorer: true,
      },
    ],
  },
  // {
  //   path: 'projects',
  //   folderText: 'my-projects',
  //   element: <AppLayout />,
  //   showFolderInExplorer: true,
  //   children: [
  //     {
  //       path: 'about',
  //       text: 'about-me.ts',
  //       element: <AboutMe />,
  //       showInExplorer: true,
  //     },
  //     {
  //       path: 'hobbies',
  //       text: 'my-hobbies.ts',
  //       element: <MyHobbies />,
  //       showInExplorer: true,
  //     },
  //     {
  //       path: 'contact',
  //       text: 'contact-me.ts',
  //       element: <ContactMe />,
  //       showInExplorer: false,
  //     },
  //   ],
  // },
]
