import { ComponentWithChildrenProps } from "../../shared/props"
import { Line } from "../Line"
import { VStack } from "../Stack"
import { Text } from "../Text"


interface Props extends ComponentWithChildrenProps {
  name: string
}

export const FormSection = ({ name, children }: Props) => (
  <VStack fullWidth gap={20}>
    <VStack fullWidth gap={8}>
      <Text color="shy">{name}</Text>
      <Line />
    </VStack>
    {children}
  </VStack>
)
