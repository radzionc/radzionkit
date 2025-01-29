import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { VStack } from '@lib/ui/css/stack'
import { ChildrenProp, TitleProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import styled from 'styled-components'

const Container = styled(VStack)`
  height: 100%;
  overflow: hidden;
  ${verticalPadding(40)}

  > * {
    ${horizontalPadding(40)}
  }
`

const Content = styled(VStack)`
  flex: 1;
  overflow-y: auto;
  gap: 28px;
`

type OnboardingSectionProps = ChildrenProp &
  TitleProp & {
    footer?: React.ReactNode
  }

export const OnboardingSection = ({
  title,
  children,
  footer,
}: OnboardingSectionProps) => (
  <Container gap={28}>
    <Text as="div" size={20} color="contrast" weight="600">
      {title}
    </Text>
    <Content>{children}</Content>
    {footer}
  </Container>
)
