import Link from 'next/link'

const Articles = () => {
  return (
    <main
      style={{ maxWidth: '70ch' }}
      className='p-8 mx-auto flex flex-col gap-y-8'
    >
      <h1>Articles</h1>

      <Link href='/articles/roadmap'>
        <a>Web Development Roadmap for Beginners</a>
      </Link>
    </main>
  )
}

export default Articles
