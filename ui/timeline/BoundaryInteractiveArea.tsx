import { ComponentProps } from 'react'
import styled from 'styled-components'
import { centerContent } from '../css/centerContent'
import { transition } from '../css/transition'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { ChevronUpIcon } from '../icons/ChevronUpIcon'
import { CenterAbsolutely } from '../layout/CenterAbsolutely'
import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { VStack } from '../layout/Stack'
import { getColor } from '../theme/getters'

const InteractiveArea = styled.div`
  width: 100%;
  cursor: row-resize;
  ${centerContent};
  height: 20px;
  color: ${getColor('contrast')};
  svg {
    font-size: 18px;
    ${transition};
  }
  :hover {
    svg {
      transform: scale(1.24);
    }
  }
`

interface BoundaryInteractiveAreaProps
  extends ComponentProps<typeof InteractiveArea> {
  top: number
}

export const BoundaryInteractiveArea = ({
  top,
  ...rest
}: BoundaryInteractiveAreaProps) => {
  return (
    <PositionAbsolutelyCenterHorizontally fullWidth top={top}>
      <InteractiveArea {...rest}>
        <CenterAbsolutely>
          <VStack alignItems="center">
            <ChevronUpIcon />
            <ChevronDownIcon />
          </VStack>
        </CenterAbsolutely>
      </InteractiveArea>
    </PositionAbsolutelyCenterHorizontally>
  )
}
