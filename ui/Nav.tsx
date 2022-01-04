import NavLink from './NavLink'

const Nav = () => {
  return (
    <nav>
      <ol className='max-w-[70ch] flex items-center mx-auto list-none h-14 justify-center gap-x-4'>
        <NavLink text='About' href='/' />
        <NavLink text='Blog' href='/blog' hasNestedRoutes />
      </ol>
    </nav>
  )
}

export default Nav
