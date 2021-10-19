import Head from 'next/head'

// This component is created because next/head can't be used directly in MDX files
const CustomHead = ({
  title,
  description = title,
}: {
  title: string
  description?: string
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
  )
}

export default CustomHead
