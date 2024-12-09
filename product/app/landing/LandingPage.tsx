import { VStack } from '@lib/ui/css/stack'
import styled from 'styled-components'
import { LandingPageHeader } from './LandingPageHeader'
import { Center } from '@lib/ui/layout/Center'
import { Text } from '@lib/ui/text'
import { Button } from '@lib/ui/buttons/Button'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import {
  increaserUrl,
  productGitHubUrl,
  productYouTubeChannelUrl,
} from '@product/app/product/resources'
import { ShyTextButton } from '@lib/ui/buttons/ShyTextButton'

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
          <Text color="contrast" as="h1" centerHorizontally size={32}>
            Build React Apps Faster with RadzionKit's Components System &
            Monorepo
          </Text>
          <ExternalLink to={productGitHubUrl}>
            <Button kind="reversed" size="l">
              Get Started
            </Button>
          </ExternalLink>
          <Text>
            Created by{' '}
            <ExternalLink to={productYouTubeChannelUrl}>
              <ShyTextButton>Radzion</ShyTextButton>
            </ExternalLink>{' '}
            and used at{' '}
            <ExternalLink to={increaserUrl}>
              <ShyTextButton>Increaser</ShyTextButton>
            </ExternalLink>
          </Text>
        </VStack>
      </Content>
    </Container>
  )
}
