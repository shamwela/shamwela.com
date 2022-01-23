import Head from 'components/Head'
import Link from 'next/link'
import type { ProjectData } from 'types/project'
import { getAllProjectsMeta } from 'functions/MDX'

export const getStaticProps = async () => {
  const projects = getAllProjectsMeta()
  return { props: { projects } }
}

const Projects = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <>
      <Head
        title="Sha Mwe La's projects"
        description="Sha Mwe La's projects"
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />
      <h1>Projects</h1>
      {projects.map(({ slug, title, readingTime }) => (
        <article key={slug} className='flex flex-col'>
          <Link href={'/projects/' + slug}>
            <a>
              <span className='font-bold'>{title}</span>
            </a>
          </Link>
          <span>{readingTime}</span>
        </article>
      ))}
      <p>
        See more projects on my{' '}
        <a href='https://github.com/shamwela' target='_blank' rel='noreferrer'>
          GitHub
        </a>
        .
      </p>
    </>
  )
}

export default Projects
