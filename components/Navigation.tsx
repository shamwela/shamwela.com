import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='flex gap-x-4'>
      <Link href='/'>About</Link>
      <Link href='/portfolio'>Portfolio</Link>
      <Link href='/blog'>Blog</Link>
    </nav>
  )
}
