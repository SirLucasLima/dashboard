import { routeConfig } from '@/routes/routes-config'
import { buildHref } from '@/utils/build-href'

export interface ExplorerConfig {
  folder: {
    text: string
  }
  file: {
    text: string
    href: string
  }[]
}

export function getExplorerConfig(): ExplorerConfig[] {
  return routeConfig
    .filter(group => group.showFolderInExplorer)
    .map(group => {
      const basePath = group.path

      const files = (group.children || [])
        .filter(child => child.showInExplorer)
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
