
// Dependencies
import Head from 'next/head'

// Component
export default function Seo ({ title = '', description = '', image = '' }) {
  const formattedTitle = title.length > 0 ? `${title} - ${process.env.PROJECT_NAME}` : process.env.PROJECT_NAME

  return (
    <Head>
      <title>{ formattedTitle }</title>

      <meta property="og:title" content={ formattedTitle } />
      <meta name="twitter:title" content={ formattedTitle } />

      {
        description.length > 0 && (
          <>
            <meta name="description" content={ description } />
            <meta property="og:description" content={ description } />
            <meta name="twitter:description" content={ description } />
          </>
        )
      }

      {
        image.length > 0 && (
          <>
            <meta property="og:image" content={ image } />
            <meta name="twitter:image" content={ image } />
          </>
        )
      }
    </Head>
  )
}
