export type PostMeta = {
  title: string
  date: string
  dateFormatted: string
  description: string
  slug?: any
  category?: 'draft' | 'project' | 'post'
  image?: string
  source?: string
}

export type Post = {
  meta: PostMeta
  code?: any
}
