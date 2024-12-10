import { IconButton } from './IconButton'
import { MoreHorizontalIcon } from '../icons/MoreHorizontalIcon'
import { ComponentProps } from 'react'

export function OpenMenuButton(
  props: Omit<ComponentProps<typeof IconButton>, 'icon' | 'title'>,
) {
  return (
    <IconButton title="Open menu" {...props} icon={<MoreHorizontalIcon />} />
  )
}
