import NavigationLink from './NavigationLink'

const Navigation = () => {
  return (
    <nav>
      <ol className='mx-auto flex h-14 max-w-[70ch] list-none items-center justify-center gap-x-4'>
        <NavigationLink text='About' href='/' hasNestedRoutes={false} />
        <NavigationLink text='Projects' href='/projects' hasNestedRoutes />
        <NavigationLink text='Blog' href='/blog' hasNestedRoutes />
      </ol>
    </nav>
  )
}

export default Navigation
