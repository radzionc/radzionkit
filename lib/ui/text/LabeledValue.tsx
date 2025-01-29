import { ReactNode } from 'react'

import { HStack } from '@lib/ui/css/stack'
import { Text, TextColor } from '.'
import { UiProps } from '../props'

type Props = UiProps & {
  name: ReactNode
  children: ReactNode
  labelColor?: TextColor
}

export const LabeledValue = ({
  name,
  children,
  labelColor = 'shy',
  ...rest
}: Props) => (
  <HStack gap={8} alignItems="center" {...rest}>
    <Text as="div" color={labelColor}>
      {name}:
    </Text>
    {children}
  </HStack>
)
