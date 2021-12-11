import Link from 'next/link'

const NavLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <li>
      <Link href={href}>
        <a className={'no-underline px-6 py-2 rounded-full text-primary'}>
          {children}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
