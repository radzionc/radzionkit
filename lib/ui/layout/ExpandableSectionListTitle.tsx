import { HStack } from '@lib/ui/css/stack'
import { ReactNode } from 'react'

import { TitleProp } from '../props'
import { Text } from '../text'

type ExpandableSectionListTitleProps = TitleProp & {
  identifier?: ReactNode
  count?: number
}

export const ExpandableSectionListTitle = ({
  title,
  identifier,
  count,
}: ExpandableSectionListTitleProps) => {
  return (
    <HStack alignItems="center" gap={8}>
      {identifier}
      <Text>{title}</Text>
      {count !== undefined && <Text color="supporting">({count})</Text>}
    </HStack>
  )
}
