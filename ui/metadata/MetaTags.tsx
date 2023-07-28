import { LogoMetaTags } from './LogoMetaTags'

interface SeoMetaTagsProps {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
  url?: string
  twitterId?: string
}

export const MetaTags = ({
  title,
  description,
  image,
  url,
  twitterId,
  imageAlt,
}: SeoMetaTagsProps) => (
  <>
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
      </>
    )}

    {image && (
      <>
        <meta property="og:image" content={image} />
        <meta name="twitter:image:src" content={image} />
      </>
    )}

    {imageAlt && (
      <>
        <meta property="og:image:alt" content={description} />
        <meta name="twitter:image:alt" content={description} />
      </>
    )}

    {url && (
      <>
        <meta name="twitter:url" content={url} />
        <meta property="og:url" content={url} />
      </>
    )}

    {twitterId && <meta name="twitter:site" content={twitterId} />}

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="manifest" href="/manifest.json" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <meta http-equiv="Content-Language" content="en" />

    <LogoMetaTags />
  </>
)
