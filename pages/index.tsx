import Head from 'components/Head'
import Image from 'next/image'
import ShaMweLaPhoto from 'public/images/sha-mwe-la-photo.jpg'

const Home = () => {
  return (
    <>
      <Head title='Sha Mwe La' />
      <div className='w-20 md:w-32'>
        <Image
          alt='Sha Mwe La'
          src={ShaMweLaPhoto}
          placeholder='blur'
          priority
          className='rounded-full'
        />
      </div>
      <p>
        Hi! I'm Sha Mwe La. If you're a recruiter, please connect with me on
        LinkedIn.
      </p>
    </>
  )
}

export default Home
