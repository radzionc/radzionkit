import { ReactNode } from 'react'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '../text'
import { ComponentWithChildrenProps } from '../props'

interface Props extends ComponentWithChildrenProps {
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
