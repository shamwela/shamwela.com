import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer
      style={{ maxWidth: '70ch', minHeight: '10vh' }}
      // Bottom margin should be the same as the nav height
      className='mb-14 mx-auto flex justify-evenly items-center'
    >
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
    </footer>
  )
}

export default Footer
