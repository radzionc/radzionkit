import { ReactNode } from 'react'

import { HStack } from '../layout/Stack'
import { Text, TextColor } from '.'
import { UIComponentProps } from '../props'

type Props = UIComponentProps & {
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
