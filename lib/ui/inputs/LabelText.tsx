import { ComponentProps } from 'react'
import { Text } from '../text'
import { AsElementComponent } from '../props'

type LabelTextProps = ComponentProps<typeof Text> & AsElementComponent

export const LabelText = ({
  as = 'div',
  children,
  size = 13,
  color = 'supporting',
  ...props
}: LabelTextProps) => (
  <Text color={color} size={size} {...props} forwardedAs={as}>
    {children}
  </Text>
)
