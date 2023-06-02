import ExternalLink from './ExternalLink'

const Footer = () => (
  <footer className='flex flex-col gap-y-4'>
    <ExternalLink href='https://docs.google.com/document/d/1HP5KAJlqz0JeeKpEf6gXrFCvNujy1dCjvIATl2serVU/edit?usp=sharing'>Resume</ExternalLink>
    <ExternalLink href='https://www.linkedin.com/in/shamwela'>
      LinkedIn
    </ExternalLink>
    <ExternalLink href='mailto:shamwela2002@gmail.com'>Email</ExternalLink>
    <ExternalLink href='https://github.com/shamwela'>GitHub</ExternalLink>
    <ExternalLink href='https://twitter.com/shamwela_'>Twitter</ExternalLink>
  </footer>
)

export default Footer
