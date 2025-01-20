import type { RouteObject } from 'react-router-dom'

import { routeConfig } from '@/config/routes-config'

export const appRoutes: RouteObject[] = routeConfig.map(group => {
  const children: RouteObject[] = (group.children || []).map(child => ({
    path: child.path,
    element: child.element,
    index: child.path === '' ? true : false,
  }))

  return {
    path: group.path,
    element: group.element,
    children: children,
  }
})
