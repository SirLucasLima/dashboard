import { routeConfig } from '@/config/routes-config'
import { buildHref } from '@/utils/build-href'

interface HeaderConfig {
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

export function getHeaderConfig(): HeaderConfig {
  const tabs: Array<{ text: string; href: string }> = []
  let contact: { text: string; href: string } = {
    text: 'contact-me.ts',
    href: '/contact',
  }

  routeConfig.forEach(group => {
    const children = group.children || []

    children.forEach(child => {
      const href = buildHref(group.path, child.path)

      if (child.showInHeader) {
        tabs.push({
          text: child.text,
          href,
        })
      }

      if (child.isContact) {
        contact = {
          text: child.text,
          href,
        }
      }
    })
  })

  return {
    title: {
      text: '/dev-lucas-lima',
      href: '/',
    },
    tabs,
    contact,
  }
}
