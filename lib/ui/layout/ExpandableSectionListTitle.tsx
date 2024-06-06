import { ReactNode } from 'react'
import { TitledComponentProps } from '../props'
import { Text } from '../text'
import { HStack } from './Stack'

type ExpandableSectionListTitleProps = TitledComponentProps & {
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
      {count && count > 0 && <Text color="supporting">({count})</Text>}
    </HStack>
  )
}
