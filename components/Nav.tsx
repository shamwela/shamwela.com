import NavLink from './NavLink'

const Nav = () => {
  return (
    <nav>
      <ol className='fixed right-0 bottom-0 left-0 list-none h-14 bg-secondary flex justify-evenly items-center'>
        <NavLink href='/blog/tips-for-coders'>Home</NavLink>
        <NavLink href='/blog'>All Blogs</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/'>About</NavLink>
      </ol>
    </nav>
  )
}

export default Nav
