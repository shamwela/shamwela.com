import Link from 'next/link'

const NavLink = ({
  href,
  style,
  children,
}: {
  href: string
  style?: React.CSSProperties
  children: React.ReactNode
}) => {
  return (
    <li>
      <Link href={href}>
        <a
          style={style}
          className='px-2 py-1 no-underline text-primary font-medium'
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
