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
        text: 'home.ts',
        href: '/',
      },
      {
        text: 'home.ts',
        href: '/',
      },
    ],
    contact: {
      text: 'contact-me.ts',
      href: '/contact',
    },
  },
]
