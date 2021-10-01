import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ol className='list-none h-12 bg-secondary flex justify-center items-center gap-x-8'>
        <li>
          <Link href='/'>
            <a
              style={{ fontSize: '1.5em' }}
              className='no-underline text-primary font-medium'
            >
              S
            </a>
          </Link>
        </li>

        <li>
          <Link href='/'>
            <a className='no-underline text-primary'>About Me</a>
          </Link>
        </li>

        <li>
          <Link href='/projects'>
            <a className='no-underline text-primary'>Projects</a>
          </Link>
        </li>

        <li>
          <Link href='/blog'>
            <a className='no-underline text-primary'>Blog</a>
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default Nav
