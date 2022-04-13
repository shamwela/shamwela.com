import { useRouter } from 'next/router'
import Link from 'next/link'

const NavigationLink = ({
  text,
  href,
  hasNestedRoutes,
}: {
  text: string
  href: string
  hasNestedRoutes: boolean
}) => {
  const { pathname } = useRouter()
  let isActive: boolean

  if (hasNestedRoutes) {
    // For example, /blog, /blog/my-blog-1, /blog/my-blog-2
    isActive = pathname.startsWith(href)
  } else {
    isActive = pathname === href
  }

  return (
    <li>
      <Link href={href}>
        <a
          aria-current={isActive ? 'page' : false}
          className={`rounded-lg px-6 py-2 text-secondary hover:no-underline ${
            isActive && 'bg-light-primary'
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  )
}

export default NavigationLink
