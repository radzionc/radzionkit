import Head from 'next/head'

interface PageMetaTags {
  title?: string
  description?: string
  image?: string
  language?: string
}

export const PageMetaTags = ({
  title,
  description,
  image,
  language,
}: PageMetaTags) => (
  <Head>
    {title && (
      <>
        <title>{title}</title>
        <meta name="application-name" content={title} />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
      </>
    )}

    {description && (
      <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image:alt" content={description} />
        <meta name="twitter:image:alt" content={description} />
      </>
    )}

    {image && (
      <>
        <meta property="og:image" content={image} />
        <meta name="twitter:image:src" content={image} />
      </>
    )}

    {language && <meta httpEquiv="Content-Language" content={language} />}
  </Head>
)
