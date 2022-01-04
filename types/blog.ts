export type BlogMeta = {
  title: string
  description: string
  imageUrl: string
  date: string
  formattedDate: string
  slug?: any
  source?: string
}

export type Blog = {
  meta: BlogMeta
  code?: any
}
