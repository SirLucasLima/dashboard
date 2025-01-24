import type { ReactNode } from 'react'

import { AppLayout } from '@/layouts/app-layout'
import { HomeLayout } from '@/layouts/home-layout'
import { AboutMe } from '@/pages/about-me'
import { Blank } from '@/pages/blank'
import { ContactMe } from '@/pages/contact-me'
import { Education } from '@/pages/education'
import { Home } from '@/pages/home'
import { Hobbies } from '@/pages/my-hobbies'

export interface RouteChildConfig {
  path: string
  text: string
  element: ReactNode
  showInExplorer?: boolean
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
    element: <HomeLayout />,
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
    path: '',
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
        path: 'education',
        text: 'education.ts',
        element: <Education />,
        showInExplorer: true,
      },
      {
        path: 'hobbies',
        text: 'hobbies.ts',
        element: <Hobbies />,
        showInExplorer: true,
      },
    ],
  },
  {
    path: 'me',
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
  {
    path: '',
    folderText: '',
    element: <AppLayout />,
    showFolderInExplorer: false,
    children: [
      {
        path: '/blank',
        text: '',
        element: <Blank />,
        showInExplorer: false,
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
