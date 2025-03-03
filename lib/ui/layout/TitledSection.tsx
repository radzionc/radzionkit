import { VStack } from '@lib/ui/css/stack'
import { ReactNode } from 'react'

import { ChildrenProp } from '../props'
import { Text } from '../text'

interface Props extends ChildrenProp {
  title: ReactNode
}

export const TitledSection = ({ title, children }: Props) => (
  <VStack fullWidth gap={20}>
    <Text as="div" size={18} weight="600" color="shy">
      {title}
    </Text>
    {children}
  </VStack>
)
