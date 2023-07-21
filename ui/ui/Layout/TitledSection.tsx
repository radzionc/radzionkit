import { ComponentWithChildrenProps } from "shared/props"
import { ReactNode } from "react"
import { VStack } from "../Stack"
import { Text } from "../Text"

interface Props extends ComponentWithChildrenProps {
  title: ReactNode
}

export const TitledSection = ({ title, children }: Props) => (
  <VStack fullWidth gap={20}>
    <Text as="div" size={18} weight="bold" color="shy">
      {title}
    </Text>
    {children}
  </VStack>
)
