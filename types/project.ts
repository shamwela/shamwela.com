export type ProjectMeta = {
  title: string
  description: string
  imageUrl: string
  date: string
  formattedDate: string
  slug: string
  content: string
  readingTime: string
}

export type Project = {
  meta: ProjectMeta
  code: string
}
