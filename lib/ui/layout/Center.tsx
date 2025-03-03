import { VStack } from '@lib/ui/css/stack'
import { ComponentProps } from 'react'

import { ChildrenProp } from '../props'

export const Center = ({
  children,
  ...rest
}: ChildrenProp & ComponentProps<typeof VStack>) => (
  <VStack
    fullWidth
    fullHeight
    alignItems="center"
    justifyContent="center"
    {...rest}
  >
    {children}
  </VStack>
)
