import { ComponentProps } from 'react'
import { Text } from '../text'

interface LabelTextProps extends ComponentProps<typeof Text> {}

export const LabelText = ({
  as = 'div',
  children,
  size = 13,
  color = 'supporting',
  ...props
}: LabelTextProps) => (
  <Text color={color} size={size} {...props} as={as}>
    {children}
  </Text>
)
