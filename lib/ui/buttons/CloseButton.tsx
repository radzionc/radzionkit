import { ComponentProps } from 'react'
import { IconButton } from './IconButton'
import { CloseIcon } from '../icons/CloseIcon'

export function CloseButton(
  props: Omit<ComponentProps<typeof IconButton>, 'icon' | 'title'>,
) {
  return <IconButton title="Close" {...props} icon={<CloseIcon />} />
}
