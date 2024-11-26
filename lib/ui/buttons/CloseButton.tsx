import { ComponentProps, forwardRef } from 'react'
import { IconButton } from './IconButton'
import { CloseIcon } from '../icons/CloseIcon'

export const CloseButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof IconButton>, 'icon' | 'title'>
>(function CloseButton(props, ref) {
  return <IconButton title="Close" ref={ref} {...props} icon={<CloseIcon />} />
})
