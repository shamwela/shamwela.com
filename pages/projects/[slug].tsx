import { Project, ProjectMeta } from 'types/project'
import { getAllProjectsMeta, getProjectBySlug } from 'functions/mdx'

import { GetStaticProps } from 'next'
import Head from 'components/Head'
import Link from 'next/link'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

export const getStaticPaths = () => {
  const blogs = getAllProjectsMeta()
  const paths = blogs.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Project> = async (context) => {
  const slug = context.params?.slug as string
  const blog = await getProjectBySlug(slug)

  return {
    props: {
      ...blog,
    },
  }
}

const ProjectPage = ({ meta, code }: { meta: ProjectMeta; code: string }) => {
  const { title, description, imageUrl, date, readingTime } = meta

  // It's generally a good idea to memoize this function call to
  // avoid re-creating the component every render
  const MDXComponent = useMemo(() => getMDXComponent(code), [code])

  // const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  //   const imageProperties = imagesProperties.find(
  //     (imageProperties) => imageProperties.src === src
  //   )

  //   return (
  //     <Image {...imageProperties} placeholder='blur' alt={alt} quality={100} />
  //   )
  // }

  const CustomLink = ({ href, ...props }: { href: string }) => {
    if (href.startsWith('http')) {
      return <a href={href} target='_blank' rel='noreferrer' {...props} />
    }

    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  const customComponents = { a: CustomLink }

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
      <MDXComponent components={customComponents} />
    </>
  )
}

export default ProjectPage
