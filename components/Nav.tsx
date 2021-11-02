import NavLink from './NavLink'

const Nav = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 md:static bg-secondary'>
      <ol
        className='flex items-center mx-auto list-none h-14 justify-evenly'
        style={{ maxWidth: '70ch' }}
      >
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/blog'>Blog</NavLink>
      </ol>
    </nav>
  )
}

export default Nav
