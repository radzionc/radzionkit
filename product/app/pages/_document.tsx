import { Html, Main, NextScript, Head } from 'next/document'
import { DocumentMetaTags } from '@lib/next-ui/metadata/DocumentMetaTags'
import { IconMetaTags } from '../icon/IconMetaTags'
import { StyledComponentsDocument } from '@lib/next-ui/StyledComponentsDocument'

class MyDocument extends StyledComponentsDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <DocumentMetaTags image="images/banner.png" language="en" />
          <IconMetaTags />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
