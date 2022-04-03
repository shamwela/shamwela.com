import Head from 'components/Head'
import Image from 'next/image'
import ShaMweLaPhoto from 'public/images/sha-mwe-la-photo.jpg'

const Home = () => {
  return (
    <>
      <Head title='Sha Mwe La' />
      <p>shamwela</p>
      <div className='w-20 md:w-32'>
        <Image
          alt='Sha Mwe La'
          src={ShaMweLaPhoto}
          placeholder='blur'
          priority
          className='rounded-full'
        />
      </div>
    </>
  )
}

export default Home
