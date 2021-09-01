import Head from 'next/head'
import Image from 'next/image'
import profilePicture from 'public/profile-picture.jpg'
import BlockAnchor from 'components/BlockAnchor'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sha Mwe La - About</title>
      </Head>

      <main className='p-4 min-h-screen flex flex-col gap-4 md:px-48 md:py-20'>
        <h1>Sha Mwe La</h1>

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
          on GitHub (github.com/shamwela). I'm also learning Software
          Engineering at GUSTO University. (gusto.edu.mm) When I'm not coding, I
          listen to songs and watch YouTube. I live in Yangon, Myanmar.
        </p>

        <BlockAnchor href='mailto:shamwela@hotmail.com'>Email me</BlockAnchor>
      </main>
    </>
  )
}
