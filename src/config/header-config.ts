export interface HeaderConfig {
  title: {
    text: string
    href: string
  }
  tabs: {
    text: string
    href: string
  }[]
  contact: {
    text: string
    href: string
  }
}

export const headerConfig: HeaderConfig[] = [
  {
    title: {
      text: '/dev-lucas-lima',
      href: '/',
    },
    tabs: [
      {
        text: 'home.ts',
        href: '/',
      },
      {
        text: 'about.ts',
        href: '/about',
      },
    ],
    contact: {
      text: 'contact-me.ts',
      href: '/contact',
    },
  },
]
