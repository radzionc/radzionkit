import { VStack } from '@radzionkit/ui/layout/Stack'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { Text } from '@radzionkit/ui/text'
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
