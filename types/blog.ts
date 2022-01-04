export type BlogMeta = {
  title: string
  description: string
  imageUrl: string
  date: string
  formattedDate: string
  slug?: string
  source?: string
}

export type Blog = {
  meta: BlogMeta
  code?: any
}
