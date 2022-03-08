import { getAllMetadata, getMetadata } from 'functions/MDX'
import Head from 'components/Head'
import { ProjectData } from 'types/project'
import { getCustomMDXComponents } from 'functions/CustomMDXComponents'
import { getImagesProperties } from 'functions/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imagesProperties } from 'types/imagesProperties'
import { useMemo } from 'react'
import path from 'path'

const PROJECTS_FOLDER_PATH = path.join(process.cwd(), 'content', 'projects')

export const getStaticPaths = () => {
  const projects = getAllMetadata(PROJECTS_FOLDER_PATH)
  const paths = projects.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const slug = context.params?.slug as string
  const projectMetadata = await getMetadata(PROJECTS_FOLDER_PATH, slug)
  const imagesProperties = await getImagesProperties()

  return {
    props: {
      ...projectMetadata,
      imagesProperties,
    },
  }
}

const ProjectPage = ({
  meta,
  code,
  imagesProperties,
}: {
  meta: ProjectData
  code: string
  imagesProperties: imagesProperties
}) => {
  const { title, description, imageUrl, date, readingTime } = meta

  // It's generally a good idea to memoize this function call to
  // avoid re-creating the component every render
  const MDXComponent = useMemo(() => getMDXComponent(code), [code])
  const customMDXComponents = getCustomMDXComponents(imagesProperties)

  return (
    <>
      <Head
        title={title}
        description={description}
        imageUrl={imageUrl}
        date={date}
      />
      <h1>{title}</h1>
      <p>{readingTime}</p>
      <MDXComponent components={customMDXComponents} />
    </>
  )
}

export default ProjectPage
