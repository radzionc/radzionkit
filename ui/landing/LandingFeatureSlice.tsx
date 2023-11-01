import { ReactNode } from 'react'
import { reverseIf } from 'shared/utils/reverseIf'
import styled from 'styled-components'
import { IntersectionAware } from 'ui/IntersectionAware'
import { VStack } from 'ui/Stack'
import { Text } from 'ui/Text'

import { LandingSlice } from './LandingSlice'

type StartsWith = 'preview' | 'info'

interface Props {
  title: ReactNode
  description: ReactNode
  cta: ReactNode
  renderPreview: () => ReactNode
  startsWith: StartsWith
}

const Wrapper = styled(LandingSlice)`
  padding: 40px 0;
  min-height: 100vh;
`

const Container = styled.div<{ isInfoFirst: boolean }>`
  display: grid;
  grid-gap: 40px;
  align-items: center;
  grid-template-columns: ${({ isInfoFirst }) =>
    reverseIf(['3fr', '2fr'], isInfoFirst).join(' ')};

  > * {
    :last-child {
      justify-self: center;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto minmax(200px, 1fr);
  }
`

export const LandingFeatureSlice = ({
  title,
  description,
  renderPreview,
  startsWith,
  cta,
}: Props) => {
  const info = (
    <VStack key="info" alignItems="start" gap={40}>
      <Text height="large" weight="bold" size={32} as="h2">
        {title}
      </Text>
      <VStack gap={8}>{description}</VStack>
      {cta}
    </VStack>
  )

  const isInfoFirst = startsWith === 'info'

  return (
    <IntersectionAware<HTMLDivElement>
      render={({ ref, wasIntersected }) => {
        const content = reverseIf(
          [wasIntersected ? renderPreview() : null, info],
          isInfoFirst,
        )

        return (
          <Wrapper ref={ref}>
            <Container isInfoFirst={isInfoFirst}>{content}</Container>
          </Wrapper>
        )
      }}
    />
  )
}
