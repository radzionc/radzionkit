import { ChildrenProp, TitleProp } from '../props'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '../text'

interface AuthViewProps extends ChildrenProp, TitleProp {}

export const AuthView = ({ children, title }: AuthViewProps) => (
  <VStack gap={40}>
    <Text centerHorizontally color="contrast" weight="600" size={24}>
      {title}
    </Text>
    {children}
  </VStack>
)
