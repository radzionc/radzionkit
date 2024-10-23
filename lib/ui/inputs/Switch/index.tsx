import styled from 'styled-components'

import { HStack } from '@lib/ui/css/stack'
import { Text } from '../../text'
import { transition } from '../../css/transition'
import { interactive } from '../../css/interactive'
import { getColor } from '../../theme/getters'
import { UIComponentProps, InputProps } from '../../props'
import { match } from '@lib/utils/match'
import { ReactNode } from 'react'
import { InvisibleHTMLCheckbox } from '../InvisibleHTMLCheckbox'
import { SwitchControl } from './SwitchControl'
import { SwitchSize } from './config'
import { SwitchContainer } from './SwitchContainer'

type SwitchProps = UIComponentProps &
  InputProps<boolean> & {
    size?: SwitchSize
    label?: ReactNode
  }

const Wrapper = styled(HStack)`
  ${interactive};

  color: ${getColor('text')};
  ${transition};

  &:hover {
    color: ${getColor('contrast')};
  }

  &:hover ${SwitchControl} {
    transform: scale(1.08);
  }
`

export const Switch = ({
  value,
  onChange,
  label,
  size = 'm',
  ...rest
}: SwitchProps) => {
  return (
    <Wrapper as="label" alignItems="center" gap={8} {...rest}>
      <SwitchContainer size={size} isActive={value}>
        <SwitchControl isActive={value} size={size} />
        <InvisibleHTMLCheckbox value={value} onChange={onChange} />
      </SwitchContainer>
      {label && (
        <Text nowrap size={match(size, { m: () => 16, s: () => 14 })} as="div">
          {label}
        </Text>
      )}
    </Wrapper>
  )
}
