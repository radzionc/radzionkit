import { ComponentWithChildrenProps } from 'lib/shared/props'
import { Text } from 'lib/ui/Text'

export const ModalTitleText = ({ children }: ComponentWithChildrenProps) => (
  <Text color="regular" as="div" weight="semibold" size={22}>
    {children}
  </Text>
)
