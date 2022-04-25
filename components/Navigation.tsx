import Link from 'next/link'

const Navigation = () => (
  <nav>
    <ol className='mx-auto flex h-14 max-w-[70ch] list-none items-center justify-center gap-x-8'>
      <li>
        <Link href='/'>
          <a>About</a>
        </Link>
      </li>

      <li>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </li>
    </ol>
  </nav>
)

export default Navigation
