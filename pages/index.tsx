import Head from 'components/Head'
import Image from 'next/image'
import ShaMweLaImage from 'public/images/sha-mwe-la.jpg'

export default function AboutPage() {
  return (
    <>
      <Head title='Sha Mwe La' />
      <h1>About</h1>
      <p>I code stuffs and write blogs.</p>
      <Image
        src={ShaMweLaImage}
        alt="Sha Mwe La's image"
        width={200}
        height={200}
        placeholder='blur'
        priority
      />
    </>
  )
}
