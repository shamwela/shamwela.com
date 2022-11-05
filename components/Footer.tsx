import ExternalLink from './ExternalLink'
import Links from './Links'

const Footer = () => (
  <footer className='flex flex-col gap-y-4 border-t-[1px]'>
    <Links />
    <ExternalLink href='https://www.linkedin.com/in/shamwela'>
      LinkedIn
    </ExternalLink>
    <ExternalLink href='mailto:shamwela2002@gmail.com'>Email</ExternalLink>
    <ExternalLink href='https://github.com/shamwela'>GitHub</ExternalLink>
    <ExternalLink href='https://twitter.com/shamwela_'>Twitter</ExternalLink>
  </footer>
)

export default Footer
