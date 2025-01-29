import { ComponentProps } from 'react'
import { Text } from '../text'
import { AsProp } from '../props'

export const ModalSubTitleText = (
  props: ComponentProps<typeof Text> & AsProp,
) => <Text color="supporting" as="div" {...props} />
