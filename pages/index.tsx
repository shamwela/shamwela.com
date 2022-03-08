import Head from 'components/Head'
import { getMetadata } from 'functions/MDX'
import { getCustomMDXComponents } from 'functions/CustomMDXComponents'
import { getImagesProperties } from 'functions/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imagesProperties } from 'types/imagesProperties'
import { useMemo } from 'react'
import Image from 'next/image'
import ShaMweLaPhoto from 'public/images/sha-mwe-la-photo.jpg'
import type { AboutData } from 'types/about'
import path from 'path'

export const getStaticProps = async () => {
  const CONTENT_FOLDER_PATH = path.join(process.cwd(), 'content')
  const aboutMetadata = await getMetadata(CONTENT_FOLDER_PATH, 'about')
  const imagesProperties = await getImagesProperties()

  return { props: { ...aboutMetadata, imagesProperties } }
}

const ShaMweLaImage = () => (
  <div className='w-20 md:w-32'>
    <Image
      alt='Sha Mwe La'
      src={ShaMweLaPhoto}
      quality={100}
      placeholder='blur'
      priority
      className='rounded-full'
    />
  </div>
)

const Home = ({
  meta,
  code,
  imagesProperties,
}: {
  meta: AboutData
  code: string
  imagesProperties: imagesProperties
}) => {
  const { title } = meta

  // It's generally a good idea to memoize this function call to
  // avoid re-creating the component every render
  const MDXComponent = useMemo(() => getMDXComponent(code), [code])
  const customMDXComponents = getCustomMDXComponents(imagesProperties)

  return (
    <>
      <Head title={title} />
      <MDXComponent components={{ ...customMDXComponents, ShaMweLaImage }} />
    </>
  )
}

export default Home
