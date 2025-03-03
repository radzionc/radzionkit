import { ComponentProps } from 'react'

import { CloseIcon } from '../icons/CloseIcon'

import { IconButton } from './IconButton'

export function CloseButton(
  props: Omit<ComponentProps<typeof IconButton>, 'icon' | 'title'>,
) {
  return <IconButton title="Close" {...props} icon={<CloseIcon />} />
}
