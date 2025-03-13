import { lightTheme } from '@lib/ui/theme/lightTheme'
import { productIconUrl, productName } from '@product/config'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Font,
} from '@react-email/components'
import * as React from 'react'

export interface LoginLinkEmailProps {
  loginUrl: string
  email: string
}

export const LoginLinkEmail = ({
  loginUrl,
  email = 'john@gmail.com',
}: LoginLinkEmailProps) => (
  <Html>
    <Head>
      <Font
        fontFamily="OpenSans"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Font
        fontFamily="OpenSans"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVIUwaEQbjA.woff2',
          format: 'woff2',
        }}
        fontWeight={700}
        fontStyle="normal"
      />
    </Head>
    <Preview>Log in to {productName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={productIconUrl} width="68" height="68" alt={productName} />
        <Heading style={heading}>{productName}</Heading>
        <Text>
          Click the button below to log in to <b>{productName}</b>.
          <br />
          This button will expire in 20 minutes.
        </Text>
        <Section style={buttonContainer}>
          <Button style={button} href={loginUrl}>
            Log in to {productName}
          </Button>
        </Section>
        <Text>
          Confirming this request will securely log you in using{' '}
          <a style={userEmail}>{email}</a>.
        </Text>
        <Text>- {productName} Team</Text>
      </Container>
    </Body>
  </Html>
)

export default LoginLinkEmail

const main = {
  backgroundColor: lightTheme.colors.background.toCssValue(),
  color: lightTheme.colors.contrast.toCssValue(),
  fontFamily:
    'OpenSans,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '500px',
}

const heading = {
  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '1.3',
}

const button = {
  backgroundColor: lightTheme.colors.primary.toCssValue(),
  borderRadius: '8px',
  fontWeight: '700',
  color: lightTheme.colors.background.toCssValue(),
  fontSize: '18px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '20px',
}

const buttonContainer = {
  padding: '8px 0 8px',
}

const userEmail = {
  textDecoration: 'none',
  color: lightTheme.colors.primary.toCssValue(),
  fontWeight: 700,
}
