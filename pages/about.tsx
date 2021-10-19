import Head from 'next/head'
import Image from 'next/image'
import ShaMweLaPhoto from 'public/assets/sha-mwe-la-photo.jpg'

const About = () => {
  return (
    <>
      <Head>
        <title>About Sha Mwe La</title>
        <meta name='description' content='About Sha Mwe La' />
      </Head>

      <h1>
        Hi, I'm <span className='block md:inline'>Sha Mwe La.</span>
      </h1>

      <div className='md:w-52'>
        <Image
          src={ShaMweLaPhoto}
          width={750}
          height={750}
          alt='Sha Mwe La'
          placeholder='blur'
          quality={100}
          priority={true}
          className='rounded-full'
        />
      </div>

      <p>
        I've been doing Front-end Web Development since 2019. I'm proficient in
        JavaScript (especially React) and CSS. I upload most of my projects on{' '}
        <a href='https://github.com/shamwela' target='_blank' rel='noopener'>
          GitHub
        </a>
        . I'm also learning Software Engineering at{' '}
        <a href='https://www.gusto.edu.mm' target='_blank' rel='noopener'>
          GUSTO University
        </a>
        . When I'm not coding, I listen to songs and watch YouTube. I live in
        Yangon, Myanmar.
      </p>

      <a
        href='mailto:shamwela@hotmail.com'
        target='_blank'
        rel='noopener'
        className='button'
      >
        Email me
      </a>
    </>
  )
}

export default About
