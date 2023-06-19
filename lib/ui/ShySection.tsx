
import { TitledComponentProps, ComponentWithChildrenProps } from 'lib/shared/props'
import { VStack } from './Stack'
import { Text } from './Text'

type ShySectionProps = TitledComponentProps & ComponentWithChildrenProps

export const ShySection = ({ title, children }: ShySectionProps) => {
  return (
    <VStack gap={8}>
      <Text size={14} weight="bold" color="supporting">
        {title}
      </Text>
      {children}
    </VStack>
  )
}
