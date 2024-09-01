import { ComponentProps } from 'react'
import { ComponentWithChildrenProps } from '../props'
import { VStack } from './Stack'

export const Center = ({
  children,
  ...rest
}: ComponentWithChildrenProps & ComponentProps<typeof VStack>) => (
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
