import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ href, children }: { href: string; children: string }) => {
  const { pathname } = useRouter()
  const isActive = pathname.includes(href)

  return (
    <li>
      <Link href={href}>
        <a
          className={`${
            isActive ? 'underline' : 'no-underline'
          } px-6 py-2 rounded-full font-medium text-primary`}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
