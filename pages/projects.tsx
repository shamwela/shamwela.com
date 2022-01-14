import Head from 'components/Head'
import Link from 'next/link'
import type { ProjectMeta } from 'types/project'
import { getAllProjectsMeta } from 'functions/MDX'

export const getStaticProps = async () => {
  const projects = getAllProjectsMeta()
  return { props: { projects } }
}

const Projects = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <>
      <Head
        title="Sha Mwe La's projects"
        description="Sha Mwe La's projects"
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />
      <h1>Projects</h1>
      {projects.map(({ slug, title, readingTime }) => (
        <Link href={'/projects/' + slug} key={slug}>
          <a>
            <article className='flex flex-col'>
              <span className='font-bold'>{title}</span>
              <span>{readingTime}</span>
            </article>
          </a>
        </Link>
      ))}
    </>
  )
}

export default Projects
