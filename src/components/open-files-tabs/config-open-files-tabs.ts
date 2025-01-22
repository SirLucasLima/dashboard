import { routeConfig } from '@/routes/routes-config'
import { buildHref } from '@/utils/build-href'

export function getConfigOpenFilesTabs(): Record<string, string> {
  const dataMap: Record<string, string> = {}

  routeConfig.forEach(group => {
    if (group.showFolderInExplorer && group.children) {
      group.children.forEach(child => {
        if (child.showInExplorer) {
          const href = buildHref(group.path, child.path)
          dataMap[href] = child.text
        }
      })
    }
  })

  return dataMap
}
