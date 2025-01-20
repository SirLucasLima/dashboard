import { buildHref } from '@/utils/build-href'

import { routeConfig } from './routes-config'

export interface SideBarConfig {
  folder: {
    text: string
  }
  file: {
    text: string
    href: string
  }[]
}

export function getSideBarConfig(): SideBarConfig[] {
  return routeConfig
    .filter(group => group.showFolderInSidebar)
    .map(group => {
      const basePath = group.path

      const files = (group.children || [])
        .filter(child => child.showInSidebar)
        .map(child => {
          const href = buildHref(basePath, child.path)
          return {
            text: child.text,
            href,
          }
        })

      return {
        folder: {
          text: group.folderText || '',
        },
        file: files,
      }
    })
}
