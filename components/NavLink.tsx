import Link from 'next/link'

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <li>
      <Link href={href}>
        <a
          style={{ fontSize: '0.875rem' }}
          className='px-2 py-1 no-underline text-primary font-medium'
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
