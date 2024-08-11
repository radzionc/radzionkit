import styled from 'styled-components'
import { VStack } from '../../layout/Stack'
import { ComponentWithChildrenProps, TitledComponentProps } from '../../props'
import { centeredContentColumn } from '../../css/centeredContentColumn'
import { Text } from '../../text'
import { verticalPadding } from '../../css/verticalPadding'

type LegalPageContentProps = ComponentWithChildrenProps & TitledComponentProps

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
