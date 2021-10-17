import Head from 'next/head'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const Projects = ({ pinnedItems }) => {
  return (
    <>
      <Head>
        <title>Sha Mwe La's Projects</title>
        <meta name='description' content="Sha Mwe La's Projects" />
      </Head>

      <h1>Projects</h1>

      {pinnedItems.map(
        ({
          id,
          name,
          description,
          url,
          homepageUrl,
        }: {
          id: string
          name: string
          description: string
          url: string
          homepageUrl: string
        }) => {
          return (
            <section
              key={id}
              className='border rounded p-4 flex flex-col gap-y-4'
            >
              <h2>{name}</h2>

              {description && <p>{description}</p>}

              <section className='flex gap-x-8'>
                {homepageUrl && (
                  <a href={homepageUrl} target='_blank' rel='noopener'>
                    Visit site
                  </a>
                )}

                <a href={url} target='_blank' rel='noopener'>
                  View code
                </a>
              </section>
            </section>
          )
        }
      )}

      <a
        href='https://github.com/shamwela?tab=repositories'
        target='_blank'
        rel='noopener'
      >
        View all projects on GitHub
      </a>
    </>
  )
}

export default Projects

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      {
        user(login: "shamwela") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                  homepageUrl
                }
              }
            }
          }
        }
      }
    `,
  })

  const { user } = data
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)

  return {
    props: { pinnedItems },
  }
}
