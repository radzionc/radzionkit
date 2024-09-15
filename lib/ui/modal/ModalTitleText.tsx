import { ComponentProps } from 'react'
import { Text } from '../text'

export const ModalTitleText = (props: ComponentProps<typeof Text>) => (
  <Text color="contrast" as="div" weight="600" size={18} {...props} />
)
