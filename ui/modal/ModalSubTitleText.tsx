import { ComponentProps } from 'react'
import { Text } from '../text'

export const ModalSubTitleText = (props: ComponentProps<typeof Text>) => (
  <Text color="supporting" as="div" {...props} />
)
