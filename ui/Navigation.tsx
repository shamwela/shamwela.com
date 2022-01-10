import NavigationLink from './NavigationLink'

const Navigation = () => {
  return (
    <nav>
      <ol className='max-w-[70ch] flex items-center mx-auto list-none h-14 justify-center gap-x-4'>
        <NavigationLink text='About' href='/' hasNestedRoutes={false} />
        <NavigationLink text='Projects' href='/projects' hasNestedRoutes />
        <NavigationLink text='Blog' href='/blog' hasNestedRoutes />
      </ol>
    </nav>
  )
}

export default Navigation
