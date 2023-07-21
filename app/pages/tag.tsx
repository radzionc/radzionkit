import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { HStack } from '@reactkit/ui/ui/Stack'
import { Tag } from '@reactkit/ui/ui/Tag'
import { useTheme } from 'styled-components'

const TagPage: NextPage = () => {
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
}

export default TagPage
