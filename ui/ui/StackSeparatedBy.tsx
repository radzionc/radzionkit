import React, { Fragment, ReactNode } from 'react'

import { Stack, StackProps } from './Stack'
import { isLast } from '../shared/utils/isLast'

export const dotSeparator = '•'
export const slashSeparator = '/'

export interface StackSeparatedByProps extends StackProps {
  separator: ReactNode
}

export const StackSeparatedBy = ({
  children,
  separator,
  gap = 8,
  wrap = 'wrap',
  ...rest
}: StackSeparatedByProps) => {
  const items = React.Children.toArray(children)
  return (
    <Stack wrap={wrap} gap={gap} {...rest}>
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

export interface HStackSeparatedByProps
  extends Omit<StackSeparatedByProps, 'direction'> {}

export const HStackSeparatedBy = ({
  alignItems = 'center',
  ...props
}: HStackSeparatedByProps) => {
  return <StackSeparatedBy direction="row" alignItems={alignItems} {...props} />
}
