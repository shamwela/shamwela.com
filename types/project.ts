export type ProjectMeta = {
  title: string
  description: string
  imageUrl: string
  slug: string
  content: string
  readingTime: string
}

export type Project = {
  meta: ProjectMeta
  code: string
}
