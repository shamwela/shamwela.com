import Head from 'components/Head'
import ExternalLink from 'components/ExternalLink'

const projects = [
  {
    name: 'SML Eats',
    description: 'A food delivery app',
    gitHubUrl: 'https://github.com/shamwela/sml-eats',
    liveSiteUrl: 'https://smleats.vercel.app',
  },
  {
    name: 'SML Social',
    description: 'Facebook clone',
    gitHubUrl: 'https://github.com/shamwela/sml-social',
    liveSiteUrl: 'https://smlsocial.up.railway.app',
  },
  {
    name: 'shamwela.com',
    description: 'My website',
    gitHubUrl: 'https://github.com/shamwela/shamwela.com',
    liveSiteUrl: 'https://www.shamwela.com',
  },
]

export default function Portfolio() {
  return (
    <>
      <Head title="Sha Mwe La's portfolio" />
      <h1>Portfolio</h1>
      <div className='flex flex-col gap-y-4'>
        {projects.map(({ name, description, gitHubUrl, liveSiteUrl }) => (
          <div key={name} className='flex flex-col gap-y-4'>
            <h2>{name}</h2>
            <p>{description}</p>
            <ExternalLink href={gitHubUrl}>GitHub</ExternalLink>
            <ExternalLink href={liveSiteUrl}>Live site</ExternalLink>
          </div>
        ))}
      </div>
    </>
  )
}
