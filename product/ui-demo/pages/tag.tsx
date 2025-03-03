import { HStack } from '@lib/ui/css/stack'
import { Tag } from '@lib/ui/tags/Tag'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useTheme } from 'styled-components'

export default makeDemoPage(() => {
  const {
    colors: { getLabelColor },
  } = useTheme()
  return (
    <DemoPage title="Tag">
      <HStack alignItems="center" gap={20} wrap="wrap">
        <Tag $color={getLabelColor(4)}>Health</Tag>
        <Tag $color={getLabelColor(8)}>Mindset</Tag>
        <Tag $color={getLabelColor(11)}>Relationships</Tag>
      </HStack>
    </DemoPage>
  )
})
