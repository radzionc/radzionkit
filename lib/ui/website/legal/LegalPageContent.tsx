import { VStack } from '@lib/ui/css/stack'
import styled from 'styled-components'

import { centeredContentColumn } from '../../css/centeredContentColumn'
import { verticalPadding } from '../../css/verticalPadding'
import { ChildrenProp, TitleProp } from '../../props'
import { Text } from '../../text'

type LegalPageContentProps = ChildrenProp & TitleProp

const Container = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 800,
  })}
  ${verticalPadding(80)};
`

export const LegalPageContent = ({
  title,
  children,
}: LegalPageContentProps) => {
  return (
    <Container>
      <VStack alignItems="center" gap={80}>
        <Text weight="600" color="contrast" as="h1">
          {title}
        </Text>
        <VStack alignItems="start" gap={40}>
          {children}
        </VStack>
      </VStack>
    </Container>
  )
}
