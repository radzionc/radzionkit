import { MoreHorizontalIcon } from 'lib/ui/icons/MoreHorizontalIcon'
import { Ref, forwardRef } from 'react'
import { IconButton, IconButtonProps } from './IconButton'

export const OpenMenuButton = forwardRef(function OpenMenuButtonInner(
  props: Omit<IconButtonProps, 'icon'>,
  ref: Ref<HTMLButtonElement> | null
) {
  return <IconButton ref={ref} {...props} icon={<MoreHorizontalIcon />} />
})
