import Head from 'components/Head'
import Image from 'next/image'

const Home = () => (
  <>
    <Head title='About Sha Mwe La' />
    <p>
      Hi, I'm Sha Mwe La. I write programs. I love listening to music and
      watching movies.
    </p>
    <div className='self-start max-w-[6rem]'>
      <Image
        alt='Sha Mwe La'
        src='/images/sha-mwe-la-photo.jpg'
        width={1050}
        height={1050}
        priority
        className='rounded-full'
      />
    </div>
  </>
)

export default Home
