import { VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/utils/entities/props'

import { ItemsProp, RenderItemProp } from '../../props'

import { ProgressListItem, ProgressListItemKind } from './ProgressListItem'

type ProgressListProps<T extends string = string> = ValueProp<T> &
  ItemsProp<T> &
  RenderItemProp<T>

export const ProgressList = <T extends string = string>({
  items,
  value,
  renderItem,
}: ProgressListProps<T>) => {
  const currentStepIndex = items.findIndex((item) => item === value)

  return (
    <VStack gap={8}>
      {items.map((item, index) => {
        let kind: ProgressListItemKind = 'loading'
        if (index < currentStepIndex) {
          kind = 'completed'
        } else if (index === currentStepIndex) {
          kind = 'active'
        }
        return (
          <ProgressListItem key={item} kind={kind}>
            {renderItem(item)}
          </ProgressListItem>
        )
      })}
    </VStack>
  )
}
