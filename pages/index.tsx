import Head from 'components/Head'
import { getAboutData } from 'functions/MDX'
import { getCustomMDXComponents } from 'functions/CustomMDXComponents'
import { getImagesProperties } from 'functions/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imagesProperties } from 'types/imagesProperties'
import { useMemo } from 'react'
import Image from 'next/image'
import ShaMweLaPhoto from 'public/images/sha-mwe-la-photo.jpg'

export const getStaticProps = async () => {
  const aboutData = await getAboutData()
  const imagesProperties = await getImagesProperties()

  return { props: { ...aboutData, imagesProperties } }
}

const Home = ({
  meta,
  code,
  imagesProperties,
}: {
  meta
  code: string
  imagesProperties: imagesProperties
}) => {
  const { title, description, imageUrl, date } = meta

  // It's generally a good idea to memoize this function call to
  // avoid re-creating the component every render
  const MDXComponent = useMemo(() => getMDXComponent(code), [code])
  const customMDXComponents = getCustomMDXComponents(imagesProperties)
  const ShaMweLaImage = () => (
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
  )

  return (
    <>
      <Head
        title={title}
        description={description}
        imageUrl={imageUrl}
        date={date}
      />
      <MDXComponent components={{ ...customMDXComponents, ShaMweLaImage }} />
    </>
  )
}

export default Home
