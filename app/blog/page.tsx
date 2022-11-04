'use client'

import { allBlogs } from 'contentlayer/generated'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <h1>Sha Mwe La's blog</h1>
      {allBlogs.map(({ _id, url, title }) => (
        <Link key={_id} href={url}>
          {title}
        </Link>
      ))}
    </>
  )
}
