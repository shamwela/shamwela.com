import Head from 'next/head'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Sha Mwe La</title>
        <meta name='description' content="Sha Mwe La's Blog" />
      </Head>

      <h1>Blog</h1>

      <Link href='/blog/why-i-love-tailwind-css'>
        <a>Why I Love Tailwind CSS</a>
      </Link>

      <Link href='/blog/roadmap'>
        <a>Web Development Roadmap for Beginners</a>
      </Link>
    </>
  )
}

export default Blog
