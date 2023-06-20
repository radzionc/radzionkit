import React, { Fragment, ReactNode } from 'react'

import { Stack, StackProps } from './Stack'
import { isLast } from 'lib/shared/utils/isLast'

export const dotSeparator = '•'
export const slashSeparator = '/'

export interface StackSeparatedByProps extends StackProps {
  separator: ReactNode
}

export const StackSeparatedBy = ({ children, separator, ...rest }: StackSeparatedByProps) => {
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
