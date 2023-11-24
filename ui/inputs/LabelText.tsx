import { ComponentProps } from 'react'
import { Text } from '../text'

interface LabelTextProps extends ComponentProps<typeof Text> {}

export const LabelText = ({
  as = 'div',
  children,
  ...props
}: LabelTextProps) => (
  <Text {...props} as={as}>
    {children}
  </Text>
)
