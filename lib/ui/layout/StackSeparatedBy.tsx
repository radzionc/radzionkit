import React, { ComponentProps, Fragment, ReactNode } from 'react'

import { Stack } from '@lib/ui/css/stack'
import { isLast } from '@lib/utils/array/isLast'

export const dotSeparator = '•'
export const slashSeparator = '/'

export type StackSeparatedByProps = ComponentProps<typeof Stack> & {
  separator: ReactNode
}

export const StackSeparatedBy = ({
  children,
  separator,
  ...rest
}: StackSeparatedByProps) => {
  const items = React.Children.toArray(children)
  return (
    <Stack {...rest}>
      {items.map((child, index) => {
        if (isLast(items, index)) {
          return child
        }

        return (
          <Fragment key={index}>
            {child}
            {separator}
          </Fragment>
        )
      })}
    </Stack>
  )
}

export type HStackSeparatedByProps = Omit<StackSeparatedByProps, 'direction'>

export const HStackSeparatedBy = ({
  alignItems = 'center',
  separator,
  ...props
}: HStackSeparatedByProps) => {
  return (
    <StackSeparatedBy
      separator={separator}
      direction="row"
      alignItems={alignItems}
      {...props}
    />
  )
}
