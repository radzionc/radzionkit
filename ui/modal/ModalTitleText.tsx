import { ComponentProps } from 'react'
import { Text } from '../ui/Text'

export const ModalTitleText = (props: ComponentProps<typeof Text>) => (
  <Text color="contrast" as="div" weight="bold" size={20} {...props} />
)
