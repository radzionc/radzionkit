import { HStack } from '@lib/ui/css/stack'
import React from 'react'
import styled, { css } from 'styled-components'

import { borderRadius } from '../../css/borderRadius'
import { interactive } from '../../css/interactive'
import { sameDimensions } from '../../css/sameDimensions'
import { transition } from '../../css/transition'
import { ChildrenProp } from '../../props'
import { matchColor, getColor } from '../../theme/getters'
import { Tooltip } from '../../tooltips/Tooltip'

interface SelectOptionProps extends ChildrenProp {
  isSelected: boolean
  isDisabled?: string | false
}

const Indicator = styled.div<{ selected: boolean }>`
  ${sameDimensions(8)};
  border-radius: 50%;
  background: ${matchColor('selected', {
    true: 'primary',
    false: 'mistExtra',
  })};
`

const Container = styled.label<{ selected: boolean; disabled?: boolean }>`
  position: relative;
  padding: 12px 20px;
  ${borderRadius.m};
  background: ${getColor('foreground')};
  ${transition};
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
        `
      : css`
          ${interactive};
          &:hover {
            background: ${getColor('mist')};
          }
        `}

  color: ${matchColor('selected', {
    true: 'contrast',
    false: 'textSupporting',
  })};
  font-weight: 500;
`

export const SelectOption = ({
  isSelected,
  isDisabled: disabledMessage,
  children,
}: SelectOptionProps) => {
  const content = (
    <>
      <HStack alignItems="center" gap={8}>
        <Indicator selected={isSelected} />
        {children}
      </HStack>
    </>
  )

  if (disabledMessage) {
    return (
      <Tooltip
        content={disabledMessage}
        renderOpener={(props) => (
          <Container {...props} disabled selected={isSelected}>
            {content}
          </Container>
        )}
      />
    )
  }

  return <Container selected={isSelected}>{content}</Container>
}
