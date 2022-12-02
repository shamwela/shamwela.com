import Head from 'components/Head'
import ExternalLink from 'components/ExternalLink'
import SMLEatsImage from 'public/images/sml-eats.png'
import SMLSocialImage from 'public/images/sml-social.png'
import Image from 'next/image'

const projects = [
  {
    name: 'SML Eats',
    description: 'A food delivery app',
    gitHubUrl: 'https://github.com/shamwela/sml-eats',
    liveSiteUrl: 'https://smleats.vercel.app',
    techStack:
      'MySQL, Prisma, Express, Node.js, Next.js, React, Redux Toolkit, TypeScript, JavaScript, Tailwind CSS, CSS, Google Analytics, Sentry, Cypress',
    imageSource: SMLEatsImage,
  },
  {
    name: 'SML Social',
    description: 'Facebook clone',
    gitHubUrl: 'https://github.com/shamwela/sml-social',
    liveSiteUrl: 'https://smlsocial.up.railway.app',
    techStack: 'MySQL, Laravel, PHP, Blade, Tailwind CSS, Cloudinary',
    imageSource: SMLSocialImage,
  },
]

export default function Portfolio() {
  return (
    <>
      <Head title="Sha Mwe La's portfolio" />
      <h1>Portfolio</h1>
      <div className='flex flex-col gap-y-4'>
        {projects.map(
          ({
            name,
            description,
            techStack,
            gitHubUrl,
            liveSiteUrl,
            imageSource,
          }) => (
            <div key={name} className='flex flex-col gap-y-4'>
              <h2>{name}</h2>
              <span>
                <ExternalLink href={gitHubUrl}>GitHub</ExternalLink>,{' '}
                <ExternalLink href={liveSiteUrl}>Live site</ExternalLink>
              </span>
              <span>{description}</span>
              <span>Tech stack: {techStack}</span>
              <ExternalLink href={liveSiteUrl}>
                <Image src={imageSource} alt={name} placeholder='blur' />
              </ExternalLink>
            </div>
          )
        )}
      </div>
      <span>
        See more projects on my{' '}
        <ExternalLink href='https://github.com/shamwela'>GitHub</ExternalLink>.
      </span>
    </>
  )
}
