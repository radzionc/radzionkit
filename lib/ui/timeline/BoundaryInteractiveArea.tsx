import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'
import { centerContent } from '../css/centerContent'
import { transition } from '../css/transition'
import { CenterAbsolutely } from '../layout/CenterAbsolutely'
import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { getColor, matchColor } from '../theme/getters'
import { borderRadius } from '../css/borderRadius'
import { IsActiveProp } from '../props'
import { GripHorizontalIcon } from '../icons/GripHorizontalIcon'

const InteractiveArea = styled.div<IsActiveProp>`
  width: 100%;
  cursor: row-resize;
  ${centerContent};
  height: 20px;
  color: ${getColor('contrast')};
  svg {
    font-size: 18px;
    ${transition};
  }
  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover ${Container} {
        background: ${getColor('foreground')};
      }
    `}
`

type BoundaryInteractiveAreaProps = ComponentProps<typeof InteractiveArea> & {
  top: number
} & IsActiveProp

export type IntervalBoundaryStatus = 'idle' | 'hovered' | 'active'

const Container = styled.div<IsActiveProp>`
  width: 28px;
  height: 20px;
  ${centerContent};
  ${borderRadius.s};
  border: 1px solid ${getColor('mistExtra')};
  font-size: 16px;
  color: ${getColor('contrast')};
  background: ${matchColor('isActive', {
    false: 'background',
    hovered: 'foreground',
    true: 'primary',
  })};
`

export const BoundaryInteractiveArea = ({
  top,
  isActive,
  ...rest
}: BoundaryInteractiveAreaProps) => {
  return (
    <PositionAbsolutelyCenterHorizontally fullWidth top={top}>
      <InteractiveArea isActive={isActive} {...rest}>
        <CenterAbsolutely>
          <Container isActive={isActive}>
            <GripHorizontalIcon />
          </Container>
        </CenterAbsolutely>
      </InteractiveArea>
    </PositionAbsolutelyCenterHorizontally>
  )
}
