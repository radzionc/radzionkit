import { ComponentProps } from 'react'
import { Text } from '../text'

interface LabelTextProps extends ComponentProps<typeof Text> {}

export const LabelText = ({
  as = 'div',
  children,
  size = 14,
  ...props
}: LabelTextProps) => (
  <Text size={size} {...props} as={as}>
    {children}
  </Text>
)
