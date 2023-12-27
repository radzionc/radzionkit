import { VStack } from '@lib/ui/layout/Stack'
import { Panel } from '@lib/ui/panel/Panel'
import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'

interface StatisticPanelProps {
  title: ReactNode
  value?: ReactNode
}
export const StatisticPanel = ({ title, value }: StatisticPanelProps) => (
  <Panel>
    <VStack gap={8}>
      <Text as="div" size={14}>
        {title}
      </Text>
      <Text as="div" size={20} weight="bold">
        {value ?? '-'}
      </Text>
    </VStack>
  </Panel>
)
