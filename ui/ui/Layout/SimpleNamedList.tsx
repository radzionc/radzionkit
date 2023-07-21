import { VStack } from "ui/Stack"
import { Text } from "ui/Text"

interface Props {
  name: string
  children?: React.ReactNode
}

export const SimpleNamedList = ({ name, children }: Props) => {
  return (
    <VStack fullWidth gap={8}>
      <Text color="shy">{name}</Text>
      {children}
    </VStack>
  )
}
