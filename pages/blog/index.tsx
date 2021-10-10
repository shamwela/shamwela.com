import Head from 'next/head'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Sha Mwe La's Blog</title>
        <meta name='description' content="Sha Mwe La's Blog" />
      </Head>

      <h1>Blog</h1>

      <Link href='/blog/tips-for-coders'>
        <a>Tips for Coders</a>
      </Link>

      <Link href='/blog/roadmap'>
        <a>Web Development Roadmap for Beginners</a>
      </Link>

      <Link href='/blog/favorite-coding-resources'>
        <a>Favorite Coding Resources</a>
      </Link>

      <Link href='/blog/favorite-visual-studio-code-extensions'>
        <a>Favorite Visual Studio Code Extensions</a>
      </Link>

      <Link href='/blog/how-to-host-a-website-for-free'>
        <a>How to host a website for free</a>
      </Link>

      <Link href='/blog/why-i-love-tailwind-css'>
        <a>Why I Love Tailwind CSS</a>
      </Link>
    </>
  )
}

export default Blog
