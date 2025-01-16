export interface SideBarConfig {
  folder: {
    text: string
  }
  file: {
    text: string
    href: string
  }[]
}

export const sideBarConfig: SideBarConfig[] = [
  {
    folder: {
      text: 'about-me',
    },
    file: [
      {
        text: 'about.ts',
        href: '/me/about',
      },
      {
        text: 'hobbies.ts',
        href: '/me/hobbies',
      },
    ],
  },
  {
    folder: {
      text: 'contact-me',
    },
    file: [
      {
        text: 'contact-me.ts',
        href: '/contact-me',
      },
    ],
  },
  {
    folder: {
      text: 'last-jobs',
    },
    file: [
      {
        text: 'originate.ts',
        href: 'jobs/originate',
      },
    ],
  },
  {
    folder: {
      text: 'my-articles',
    },
    file: [
      {
        text: 'type-or-interface.ts',
        href: 'articles/type-or-interface',
      },
    ],
  },
]
