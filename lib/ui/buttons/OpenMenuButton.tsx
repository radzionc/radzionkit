import { forwardRef } from 'react'

import { IconButton } from './IconButton'

import { MoreHorizontalIcon } from '../icons/MoreHorizontalIcon'

import { ComponentProps } from 'react'

export const OpenMenuButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof IconButton>, 'icon' | 'title'>
>(function OpenMenuButton(props, ref) {
  return (
    <IconButton
      ref={ref}
      title="Open menu"
      {...props}
      icon={<MoreHorizontalIcon />}
    />
  )
})
