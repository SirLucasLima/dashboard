import { globalLinksConfig } from './globa-links-config'

export interface PresentationConfig {
  presentation: {
    welcome: string
    name: string
    stack: string
  }
  infos: {
    comment: string
    variable: string
    value: string
    href: string
  }[]
}

export const presentationConfig: PresentationConfig[] = [
  {
    presentation: {
      welcome: 'Hello, folks! I am',
      name: 'Dev Lucas Lima',
      stack: '> Full-Stack developer',
    },
    infos: [
      {
        comment: '// my number',
        variable: 'cellphone',
        value: '+55 (54) 99665-2594',
        href: globalLinksConfig.whatsApp,
      },
      // {
      //   comment: '// my e-mail',
      //   variable: 'email',
      //   value: 'developerlucaslima@gmail.com',
      //   href: globalLinksConfig.whatsApp,
      // },
      {
        comment: '// my GitHub',
        variable: 'github',
        value: 'github.com/developerlucaslima',
        href: globalLinksConfig.linkedIn,
      },
      {
        comment: '// my LinkedIn',
        variable: 'linkedIn',
        value: 'linkedin.com/in/developerlucaslima',
        href: globalLinksConfig.linkedIn,
      },
      {
        comment: '// my Behance',
        variable: 'behance',
        value: 'behance.net/developerlucaslima',
        href: globalLinksConfig.behance,
      },
    ],
  },
]
