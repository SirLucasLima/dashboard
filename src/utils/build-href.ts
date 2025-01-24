export function buildHref(groupPath: string, childPath: string) {
  if (!groupPath && !childPath) return '/'
  if (!groupPath) return `/${childPath}`
  if (!childPath) return `/${groupPath}`
  return `/${groupPath}/${childPath}`
}
