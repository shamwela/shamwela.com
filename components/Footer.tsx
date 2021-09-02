import { IconContext } from 'react-icons'
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer
      style={{ maxWidth: '70ch', minHeight: '10vh' }}
      className='mx-auto px-8 py-4 flex justify-evenly items-center'
    >
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <a
          aria-label='Email'
          href='mailto:shamwela@hotmail.com'
          target='_blank'
          rel='noopener'
        >
          <AiOutlineMail />
        </a>

        <a
          aria-label='GitHub'
          href='https://github.com/shamwela'
          target='_blank'
          rel='noopener'
        >
          <AiFillGithub />
        </a>

        <a
          aria-label='LinkedIn'
          href='https://www.linkedin.com/in/shamwela'
          target='_blank'
          rel='noopener'
        >
          <AiFillLinkedin />
        </a>

        <a
          aria-label='Twitter'
          href='https://twitter.com/shamwela_'
          target='_blank'
          rel='noopener'
        >
          <AiOutlineTwitter />
        </a>
      </IconContext.Provider>
    </footer>
  )
}
