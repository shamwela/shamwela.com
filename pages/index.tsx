import Head from 'components/Head'
import Image from 'next/image'
import ShaMweLaPhoto from 'public/images/sha-mwe-la-photo.jpg'

const Home = () => {
  return (
    <>
      <Head
        title='About Sha Mwe La'
        description='Get to know Sha Mwe La'
        imageUrl='/images/sha-mwe-la-open-graph.png'
        date='2021-12-20'
      />

      <h1>Hi, I&apos;m Sha Mwe La.</h1>

      <div className='w-20 md:w-32'>
        <Image
          src={ShaMweLaPhoto}
          alt='Sha Mwe La'
          quality={100}
          placeholder='blur'
          priority
          className='rounded-full'
        />
      </div>

      <p>
        I love building web apps. You can see my projects on{' '}
        <a href='https://github.com/shamwela' target='_blank' rel='noreferrer'>
          GitHub
        </a>
        . I also blog to help beginners and share my opinions. I&apos;m also
        learning Software Engineering at GUSTO University. I live in Yangon,
        Myanmar.
      </p>
    </>
  )
}

export default Home
