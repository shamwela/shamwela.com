import Head from 'components/Head'
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
      <Head
        title="Sha Mwe La's Projects"
        description="Sha Mwe La's Projects"
        keywords='sha mwe la projects, shamwela projects'
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />

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
              className='flex flex-col p-4 border rounded-lg gap-y-4'
            >
              <h2>{name}</h2>

              {description && <p>{description}</p>}

              <section className='flex gap-x-8'>
                {homepageUrl && (
                  <a href={homepageUrl} target='_blank' rel='noreferrer'>
                    Visit site
                  </a>
                )}

                <a href={url} target='_blank' rel='noreferrer'>
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
        rel='noreferrer'
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
