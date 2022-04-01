import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mx-auto grid max-w-[70ch] gap-y-4 border-t-[1px] p-5 md:grid-cols-2'>
      <div className='flex flex-col gap-y-[inherit]'>
        <Link href='/'>
          <a>About</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>

      <div className='flex flex-col gap-y-[inherit]'>
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
    </footer>
  )
}

export default Footer
