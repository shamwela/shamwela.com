import NavLink from './NavLink'

const Nav = () => {
  return (
    <nav>
      <ol className='fixed right-0 bottom-0 left-0 list-none h-14 bg-secondary flex justify-evenly items-center'>
        <NavLink href='/blog'>Blog</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/about'>About</NavLink>
      </ol>
    </nav>
  )
}

export default Nav
