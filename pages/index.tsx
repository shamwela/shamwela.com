import Head from 'next/head'
import Image from 'next/image'
import profilePicture from 'public/profile-picture.jpg'
import BlockAnchor from 'components/BlockAnchor'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me | Sha Mwe La</title>
      </Head>

      <main
        style={{ maxWidth: '70ch' }}
        className='p-8 mx-auto flex flex-col gap-8'
      >
        <h1>
          Hello, I'm <span className='block md:inline'>Sha Mwe La.</span>
        </h1>

        <div className='md:w-52'>
          <Image
            src={profilePicture}
            alt='Picture of the author'
            placeholder='blur'
            priority={true}
          />
        </div>

        <h2>My mission is to improve the world with quality software.</h2>

        <p>
          I've been doing Front-end Web Development since 2019. I'm proficient
          in JavaScript (especially React) and CSS. I upload most of my projects
          on{' '}
          <a href='https://github.com/shamwela' target='_blank'>
            GitHub
          </a>
          . I'm also learning Software Engineering at{' '}
          <a href='https://www.gusto.edu.mm' target='_blank'>
            GUSTO University
          </a>
          . When I'm not coding, I listen to songs and watch YouTube. I live in
          Yangon, Myanmar.
        </p>

        <BlockAnchor href='mailto:shamwela@hotmail.com' target='_blank'>
          Email me
        </BlockAnchor>
      </main>

      <Footer />
    </>
  )
}
