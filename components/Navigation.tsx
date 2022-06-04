import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='flex justify-center gap-x-8 p-4'>
      <Link href='/projects'>
        <a>Projects</a>
      </Link>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
    </nav>
  )
}

export default Navigation
