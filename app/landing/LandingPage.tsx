import { VStack } from '@reactkit/ui/layout/Stack'
import styled from 'styled-components'
import { LandingPageHeader } from './LandingPageHeader'
import { Center } from '@reactkit/ui/ui/Center'
import { Text } from '@reactkit/ui/ui/Text'
import { Button } from '@reactkit/ui/buttons/Button'
import { ExternalLink } from '@reactkit/ui/navigation/Link/ExternalLink'
import {
  increaserUrl,
  productGitHubUrl,
  productYouTubeChannelUrl,
} from 'product/resources'
import { ShyTextButton } from '@reactkit/ui/buttons/ShyTextButton'

const Container = styled(VStack)`
  height: 100%;
`

// TODO: remove hard coded padding
const Content = styled(Center)`
  padding-bottom: 80px;
`

export const LandingPage = () => {
  return (
    <Container>
      <LandingPageHeader />
      <Content>
        <VStack style={{ maxWidth: 480 }} alignItems="center" gap={24}>
          <Text color="contrast" as="h1" centered size={32}>
            Build React Apps Faster with ReactKit's Components System & Monorepo
          </Text>
          <ExternalLink to={productGitHubUrl}>
            <Button kind="reversed" size="l">
              Get Started
            </Button>
          </ExternalLink>
          <Text>
            Created by{' '}
            <ExternalLink to={productYouTubeChannelUrl}>
              <ShyTextButton text="Radzion" />
            </ExternalLink>{' '}
            and used at{' '}
            <ExternalLink to={increaserUrl}>
              <ShyTextButton text="Increaser" />
            </ExternalLink>
          </Text>
        </VStack>
      </Content>
    </Container>
  )
}
