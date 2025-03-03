import { ComponentProps } from 'react'

import { AsProp } from '../props'
import { Text } from '../text'

export const ModalSubTitleText = (
  props: ComponentProps<typeof Text> & AsProp,
) => <Text color="supporting" as="div" {...props} />
