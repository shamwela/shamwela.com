import Head from 'components/Head'
import { allProjects } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { getImageProperties } from 'utilities/plaiceholder'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { getMDXComponents } from 'utilities/getMDXComponents'

export const getStaticProps = async () => {
  const projects = allProjects[0] // because there's only one page
  const imagesProperties = await getImageProperties()

  return {
    props: {
      projects,
      imagesProperties,
    },
  }
}

const ProjectsPage = ({
  projects,
  imagesProperties,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Component = useMDXComponent(projects.body.code)
  const { title } = projects
  const MDXComponents = getMDXComponents(imagesProperties)

  return (
    <>
      <Head title={title} />
      <h1>{title}</h1>
      <Component components={MDXComponents} />
    </>
  )
}

export default ProjectsPage
