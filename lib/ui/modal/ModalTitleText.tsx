import { ChildrenProp } from '../props'
import { Text, TextProps } from '../text'

export const ModalTitleText = (props: TextProps & ChildrenProp) => (
  <Text color="contrast" as="div" weight="600" size={18} {...props} />
)
