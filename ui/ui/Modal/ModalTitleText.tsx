import { ComponentWithChildrenProps } from 'shared/props'
import { Text } from 'ui/Text'

export const ModalTitleText = ({ children }: ComponentWithChildrenProps) => (
  <Text color="regular" as="div" weight="semibold" size={22}>
    {children}
  </Text>
)
