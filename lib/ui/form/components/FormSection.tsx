import { VStack } from '@lib/ui/css/stack'

import { LineSeparator } from '../../layout/LineSeparator'
import { ChildrenProp } from '../../props'
import { Text } from '../../text'

interface Props extends ChildrenProp {
  name: string
}

export const FormSection = ({ name, children }: Props) => (
  <VStack fullWidth gap={20}>
    <VStack fullWidth gap={8}>
      <Text color="shy">{name}</Text>
      <LineSeparator layout="column" />
    </VStack>
    {children}
  </VStack>
)
