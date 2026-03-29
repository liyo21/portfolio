// src/utils/image.ts
export const getImgPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || ''

  if (!basePath || basePath === '/') {
    return path
  }

  if (path.startsWith(basePath)) {
    return path
  }

  return `${basePath}${path}`
}