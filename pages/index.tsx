import Head from 'components/Head'
import ExternalLink from 'components/ExternalLink'

const projects = [
  {
    name: 'SML Eats',
    description: 'A food delivery app',
    gitHubUrl: 'https://github.com/shamwela/sml-eats',
    liveUrl: 'https://smleats.vercel.app',
  },
  {
    name: 'SML Social',
    description: 'Facebook clone',
    gitHubUrl: 'https://github.com/shamwela/sml-social',
  },
  {
    name: 'shamwela.com',
    description: 'My website',
    gitHubUrl: 'https://github.com/shamwela/shamwela.com',
    liveUrl: 'https://www.shamwela.com',
  },
]

export default function Portfolio() {
  return (
    <>
      <Head title="Sha Mwe La's portfolio" />
      <h1>Portfolio</h1>
      <div className='flex flex-col gap-y-4'>
        {projects.map(({ name, description, gitHubUrl, liveUrl }) => (
          <div key={name} className='flex flex-col gap-y-4'>
            <h2>{name}</h2>
            <p>{description}</p>
            <ExternalLink href={gitHubUrl}>GitHub</ExternalLink>
            {liveUrl && <ExternalLink href={liveUrl}>Live site</ExternalLink>}
          </div>
        ))}
      </div>
    </>
  )
}
