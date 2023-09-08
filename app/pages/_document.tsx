import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { MetaTags } from '@reactkit/ui/metadata/MetaTags'
import { AppIconMetaTags } from '@reactkit/ui/metadata/AppIconMetaTags'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />), //gets the styles from all the components inside <App>
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <MetaTags
            title="Accelerate React App Development with ReactKit's Components System and Monorepo"
            description="Discover how ReactKit's Components System and Monorepo can streamline your React app development process. Explore powerful tools and best practices to accelerate your projects."
            url={process.env.NEXT_PUBLIC_BASE_URL}
            twitterId="@radzionc"
          />
          <AppIconMetaTags />
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
