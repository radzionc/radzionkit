import { ComponentWithChildrenProps, TitledComponentProps } from '../props'
import { VStack } from '../layout/Stack'
import { Text } from '../text'

interface AuthViewProps
  extends ComponentWithChildrenProps,
    TitledComponentProps {}

export const AuthView = ({ children, title }: AuthViewProps) => (
  <VStack gap={40}>
    <Text centered color="contrast" weight="bold" size={24}>
      {title}
    </Text>
    {children}
  </VStack>
)
