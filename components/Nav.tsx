import NavLink from './NavLink'

const Nav = () => {
  return (
    <header>
      <ol className='list-none h-14 bg-secondary flex justify-center items-center gap-x-8'>
        <NavLink href='/' style={{ fontSize: '1.5em' }}>
          S
        </NavLink>
        <NavLink href='/'>About Me</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/blog'>Blog</NavLink>
      </ol>
    </header>
  )
}

export default Nav
