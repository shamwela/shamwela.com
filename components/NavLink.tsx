import { useRouter } from 'next/router'
import Link from 'next/link'

const NavLink = ({
  text,
  href,
  hasNestedRoutes = false,
}: {
  text: string
  href: string
  hasNestedRoutes?: boolean
}) => {
  const { pathname } = useRouter()
  let isActive: boolean

  if (hasNestedRoutes) {
    // For example, /blog, /blog/1, /blog/2
    isActive = pathname.startsWith(href)
  } else {
    isActive = pathname === href
  }

  return (
    <li>
      <Link href={href}>
        <a
          className={`${
            isActive && 'text-accent'
          } no-underline px-6 py-2 rounded-full`}
        >
          {text}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
