import Head from 'components/Head'
import Link from 'next/link'

const Projects = () => {
  return (
    <>
      <Head
        title="Sha Mwe La's projects"
        description="Sha Mwe La's projects"
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />
      <h1>Projects</h1>
      <Link href='/projects/shamwela.com'>
        <a>shamwela.com (this website)</a>
      </Link>
    </>
  )
}

export default Projects
