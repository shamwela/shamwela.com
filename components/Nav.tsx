import NavLink from './NavLink'

const Nav = () => {
  return (
    <nav className='fixed right-0 bottom-0 left-0 bg-secondary'>
      <ol
        className='mx-auto list-none h-14 flex justify-evenly items-center'
        style={{ maxWidth: '70ch' }}
      >
        <NavLink href='/blog'>Blog</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/about'>About</NavLink>
      </ol>
    </nav>
  )
}

export default Nav
