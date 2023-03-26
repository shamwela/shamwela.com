import Head from 'components/Head'
import Image from 'next/image'
import ShaMweLaImage from 'public/images/sha-mwe-la.jpg'

const AboutPage = () => (
  <>
    <Head title='Sha Mwe La' />
    <h1>Hi! I'm Sha Mwe La.</h1>
    <p>I work as a Junior Software Engineer at K-Link Myanmar. I mainly work on web apps. Outside of work, I love trying out new food, traveling, and running.</p>
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

export default AboutPage
