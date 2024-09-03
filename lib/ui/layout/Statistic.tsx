import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'

interface StatisticProps {
  title: ReactNode
  value?: ReactNode
}

export const Statistic = ({ title, value }: StatisticProps) => (
  <VStack gap={8}>
    <Text as="div" size={14}>
      {title}
    </Text>
    <Text as="div" size={20} weight="600">
      {value ?? '-'}
    </Text>
  </VStack>
)
