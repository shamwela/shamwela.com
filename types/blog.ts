export type BlogMeta = {
  title: string
  description: string
  imageUrl: string
  date: string
  topics: string[]
  formattedDate: string
  slug: string
  content: string
  readingTime: string
}

export type Blog = {
  meta: BlogMeta
  code: string
}
