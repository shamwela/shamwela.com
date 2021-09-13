import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      {/* Height should be the same as the Layout's bottom padding */}
      <ol className='list-none h-12 bg-secondary fixed md:static right-0 bottom-0 left-0 flex justify-center items-center gap-x-8 z-50'>
        <li>
          <Link href='/'>
            <a className='no-underline text-primary'>About Me</a>
          </Link>
        </li>

        <li>
          <Link href='/articles'>
            <a className='no-underline text-primary'>Articles</a>
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default Nav
