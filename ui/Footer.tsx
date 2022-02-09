import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mx-auto grid max-w-[70ch] gap-y-4 border-t-2 p-5 md:grid-cols-2'>
      <div className='flex flex-col gap-y-4'>
        <Link href='/'>
          <a>About</a>
        </Link>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>

      <div className='flex flex-col gap-y-4'>
        <a href='mailto:shamwela@hotmail.com' target='_blank' rel='noreferrer'>
          Email
        </a>
        <a href='https://github.com/shamwela' target='_blank' rel='noreferrer'>
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/shamwela'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://twitter.com/shamwela_'
          target='_blank'
          rel='noreferrer'
        >
          Twitter
        </a>
        <a
          href='https://www.facebook.com/shamwelaofficial'
          target='_blank'
          rel='noreferrer'
        >
          Facebook
        </a>
      </div>

      <span>Sha Mwe La © {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer
