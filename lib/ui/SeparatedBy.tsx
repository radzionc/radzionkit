import { ComponentWithChildrenProps } from 'lib/shared/props'
import React, { Fragment } from 'react'

import { HStack } from './Stack'
import { Text } from './Text'

export const dotSeparator = '•'
export const slashSeparator = '/'

interface Props extends ComponentWithChildrenProps {
  separator?: string
  gap?: number
}

export const SeparatedBy = ({ children, separator, gap = 8 }: Props) => {
  const definedChildren = React.Children.toArray(children).filter(
    (child) => child
  )
  return (
    <HStack alignItems="center" gap={gap}>
      {definedChildren.map((child, index) => {
        if (index === definedChildren.length - 1) {
          return child
        }

        return (
          <Fragment key={index}>
            {child}
            <Text color="supporting" as="div">
              {separator}
            </Text>
          </Fragment>
        )
      })}
    </HStack>
  )
}
