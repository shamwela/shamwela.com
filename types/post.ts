export type PostMeta = {
  title: string
  date: string
  formattedDate: string
  description: string
  slug?: any
  image?: string
  source?: string
}

export type Post = {
  meta: PostMeta
  code?: any
}
