import { VStack } from '@lib/ui/css/stack'
import { Fragment } from 'react'

import { Button } from '../buttons/Button'
import { useBoolean } from '../hooks/useBoolean'
import { ItemsProp, RenderItemProp } from '../props'

type CroppedListProps<T> = ItemsProp<T> &
  RenderItemProp<T> & {
    cropAfter?: number
  }

export function CroppedList<T>({
  items,
  renderItem,
  cropAfter = 5,
}: CroppedListProps<T>) {
  const [showAll, { toggle }] = useBoolean(false)

  const visibleItems = showAll ? items : items.slice(0, cropAfter)

  return (
    <VStack fullHeight justifyContent="space-between" gap={24}>
      <VStack gap={8}>
        {visibleItems.map((item, index) => (
          <Fragment key={index}>{renderItem(item)}</Fragment>
        ))}
      </VStack>
      {items.length > cropAfter && (
        <Button onClick={toggle} kind="secondary">
          {showAll ? 'Show less' : 'Show more'}
        </Button>
      )}
    </VStack>
  )
}
