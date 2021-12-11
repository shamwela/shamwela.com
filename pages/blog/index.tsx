import Head from 'components/Head'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
      <Head
        title="Sha Mwe La's Blog"
        description="Sha Mwe La's Blog"
        keywords='sha mwe la blog, shamwela blog'
        previewImage='sha-mwe-la-open-graph.png'
      />

      <h1>Blog</h1>

      <Link href='/blog/how-to-setup-next.js-with-tailwind-css-and-typescript'>
        <a>How to setup Next.js with TypeScript and Tailwind CSS</a>
      </Link>

      <Link href='/blog/productivity-tips'>
        <a>Productivity tips</a>
      </Link>

      <Link href='/blog/how-to-style-your-react-app'>
        <a>How to style your React app</a>
      </Link>

      <Link href='/blog/tips-for-coders'>
        <a>Tips for Coders</a>
      </Link>

      <Link href='/blog/roadmap'>
        <a>Web Development Roadmap</a>
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

      <Link href='/blog/html-tips'>
        <a>HTML Tips</a>
      </Link>
    </>
  )
}

export default Blog
