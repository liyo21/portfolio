import type { SupportedLocale } from '@/utils/locale'
import { isSupportedLocale } from '@/utils/locale'

type ProjectFrontmatter = {
  translationKey: string
  locale: SupportedLocale
  slug: string
  title: string
  excerpt: string
  date: string
  coverImage: string
  author: string
  category: string
  metaDescription: string
  keywords: string[]
}

export type BlogPost = ProjectFrontmatter & {
  id: string
  content: string
}

const projectFiles = import.meta.glob('../content/projects/**/*.md', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>

function parseProjectFile(path: string, projectFile: unknown): BlogPost {
  if (!projectFile || typeof projectFile !== 'object') {
    throw new Error(`Invalid project module: ${path}`)
  }

  const data = projectFile as Partial<BlogPost>

  const requiredTextFields = [
    'translationKey',
    'locale',
    'slug',
    'title',
    'excerpt',
    'date',
    'coverImage',
    'author',
    'category',
    'metaDescription',
    'content',
  ] as const

  for (const field of requiredTextFields) {
    if (typeof data[field] !== 'string' || !data[field]) {
      throw new Error(`Missing or invalid "${field}" in ${path}`)
    }
  }

  if (typeof data.locale !== 'string' || !isSupportedLocale(data.locale)) {
    throw new Error(`Unsupported locale "${data.locale}" in ${path}`)
  }

  if (!Array.isArray(data.keywords) || data.keywords.some((keyword) => typeof keyword !== 'string')) {
    throw new Error(`Missing or invalid "keywords" in ${path}`)
  }

  const metadata = data as ProjectFrontmatter

  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.date)) {
    throw new Error(`Date must use YYYY-MM-DD format in ${path}`)
  }

  if (!path.endsWith(`/${metadata.translationKey}/${metadata.locale}.md`)) {
    throw new Error(
      `Project path must match translationKey and locale: ${path}`,
    )
  }

  return {
    id: metadata.translationKey,
    ...metadata,
    content: data.content as string,
  }
}

const allProjects = Object.entries(projectFiles)
  .map(([path, source]) => parseProjectFile(path, source))
  .sort((a, b) => b.date.localeCompare(a.date))

function assertTranslationPairs(projects: BlogPost[]) {
  const localesByProject = new Map<string, Set<SupportedLocale>>()
  const projectByLocalizedSlug = new Map<string, string>()

  for (const project of projects) {
    const locales = localesByProject.get(project.translationKey) ?? new Set<SupportedLocale>()

    if (locales.has(project.locale)) {
      throw new Error(`Duplicate ${project.locale} translation for ${project.translationKey}`)
    }

    locales.add(project.locale)
    localesByProject.set(project.translationKey, locales)

    const localizedSlug = `${project.locale}:${project.slug}`
    const existingProject = projectByLocalizedSlug.get(localizedSlug)

    if (existingProject && existingProject !== project.translationKey) {
      throw new Error(`Duplicate slug "${project.slug}" for locale ${project.locale}`)
    }

    projectByLocalizedSlug.set(localizedSlug, project.translationKey)
  }

  for (const [translationKey, locales] of localesByProject) {
    for (const locale of ['es', 'en'] satisfies SupportedLocale[]) {
      if (!locales.has(locale)) {
        throw new Error(`Missing ${locale} translation for ${translationKey}`)
      }
    }
  }
}

assertTranslationPairs(allProjects)

export const getProjects = (locale: SupportedLocale): BlogPost[] =>
  allProjects.filter((project) => project.locale === locale)

export function getProjectBySlug(slug: string, locale: SupportedLocale) {
  const matchedProject = allProjects.find((project) => project.slug === slug)

  if (!matchedProject) return undefined

  return allProjects.find(
    (project) =>
      project.translationKey === matchedProject.translationKey &&
      project.locale === locale,
  )
}
