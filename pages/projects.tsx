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
        <title>Projects | Sha Mwe La</title>
        <meta name='description' content="Sha Mwe La's Projects" />
      </Head>

      {pinnedItems.map(
        ({
          id,
          url,
          name,
          description,
        }: {
          id: string
          url: string
          name: string
          description: string
        }) => {
          return (
            <div key={id}>
              <a href={url} target='_blank' rel='noopener'>
                {name}
              </a>

              {description && <p>{description}</p>}
            </div>
          )
        }
      )}
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
                  url
                  name
                  description
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
