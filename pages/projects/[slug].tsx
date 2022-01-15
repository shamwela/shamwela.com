import { Project, ProjectMeta } from 'types/project'
import { getAllProjectsMeta, getProjectBySlug } from 'functions/MDX'

import { GetStaticProps } from 'next'
import Head from 'components/Head'
import { getCustomMDXComponents } from 'functions/CustomMDXComponents'
import { getImagesProperties } from 'functions/plaiceholder'
import { getMDXComponent } from 'mdx-bundler/client'
import type { imagesProperties } from 'types/imagesProperties'
import { useMemo } from 'react'

export const getStaticPaths = () => {
  const projects = getAllProjectsMeta()
  const paths = projects.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Project> = async (context) => {
  const slug = context.params?.slug as string
  const projectData = await getProjectBySlug(slug)
  const imagesProperties = await getImagesProperties()

  return {
    props: {
      ...projectData,
      imagesProperties,
    },
  }
}

const ProjectPage = ({
  meta,
  code,
  imagesProperties,
}: {
  meta: ProjectMeta
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
