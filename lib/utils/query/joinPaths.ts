export const joinPaths = (base: string, path: string): string => {
  if (base.endsWith('/')) {
    base = base.slice(0, -1)
  }

  if (path.startsWith('/')) {
    path = path.substring(1)
  }

  return `${base}/${path}`
}
