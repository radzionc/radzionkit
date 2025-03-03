import { DocumentMetaTags } from '@lib/next-ui/metadata/DocumentMetaTags'
import { StyledComponentsDocument } from '@lib/next-ui/StyledComponentsDocument'
import { Html, Main, NextScript, Head } from 'next/document'

import { IconMetaTags } from '../icon/IconMetaTags'

class MyDocument extends StyledComponentsDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <DocumentMetaTags
            twitterId="@radzionc"
            image="images/banner.png"
            language="en"
          />
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
