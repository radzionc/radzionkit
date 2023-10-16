import { ComponentProps } from 'react'
import { Text } from '../ui/Text'

export const ModalSubTitleText = (props: ComponentProps<typeof Text>) => (
  <Text color="supporting" as="div" {...props} />
)
