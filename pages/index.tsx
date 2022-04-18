import Head from 'components/Head'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Head title='About Sha Mwe La' />
      <p>
        Hi, I'm Sha Mwe La. I write programs. I love listening to music and
        watching movies.
      </p>
      <div className='self-start'>
        <Image
          alt='Sha Mwe La'
          src='/images/sha-mwe-la-photo.jpg'
          blurDataURL='/images/sha-mwe-la-photo.jpg'
          width={100}
          height={100}
          priority
          className='rounded-full'
        />
      </div>
    </>
  )
}

export default Home
