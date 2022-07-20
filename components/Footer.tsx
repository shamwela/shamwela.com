import Link from 'next/link'
import ExternalLink from './ExternalLink'

const Footer = () => (
  <footer className='mx-auto max-w-[70ch] flex flex-col gap-y-4 border-t-[1px] p-5'>
    <Link href='/projects'>
      <a>Projects</a>
    </Link>
    <Link href='/'>
      <a>Blog</a>
    </Link>
    <ExternalLink href='mailto:shamwela2002@gmail.com'>Email</ExternalLink>
    <ExternalLink href='https://github.com/shamwela'>GitHub</ExternalLink>
    <ExternalLink href='https://www.linkedin.com/in/shamwela'>
      LinkedIn
    </ExternalLink>
    <ExternalLink href='https://twitter.com/shamwela_'>Twitter</ExternalLink>
  </footer>
)

export default Footer
