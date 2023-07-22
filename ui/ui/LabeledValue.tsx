import { ReactNode } from 'react'

import { HStack } from './Stack'
import { Text } from './Text'

interface Props {
  name: string
  children: ReactNode
}

export const LabeledValue = ({ name, children }: Props) => (
  <HStack gap={8} alignItems="center">
    <Text color="shy">{name}:</Text>
    {children}
  </HStack>
)
