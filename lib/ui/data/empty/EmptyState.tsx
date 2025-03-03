import { ReactNode } from 'react'

import { HStack, VStack } from '../../css/stack'
import { NoDataIllustration } from '../../illustrations/NoDataIllustration'
import { ActionProp, TitleProp } from '../../props'
import { Text } from '../../text'

import { EmptyStateContainer } from './EmptyStateContainer'
import { EmptyStateContent } from './EmptyStateContent'

type EmptyStateProps = TitleProp &
  ActionProp & {
    description?: ReactNode
  }

export const EmptyState = ({ action, title, description }: EmptyStateProps) => {
  return (
    <EmptyStateContainer>
      <EmptyStateContent>
        <VStack alignItems="center" gap={8}>
          <Text centerHorizontally size={20} weight="700" color="contrast">
            {title}
          </Text>
          {description && (
            <Text height="l" centerHorizontally color="supporting">
              {description}
            </Text>
          )}
        </VStack>
        <NoDataIllustration fontSize={100} />
        <HStack gap={8} alignItems="center">
          {action}
        </HStack>
      </EmptyStateContent>
    </EmptyStateContainer>
  )
}
