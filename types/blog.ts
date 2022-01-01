export type BlogMeta = {
  title: string
  date: string
  formattedDate: string
  description: string
  slug?: any
  image?: string
  source?: string
}

export type Blog = {
  meta: BlogMeta
  code?: any
}
