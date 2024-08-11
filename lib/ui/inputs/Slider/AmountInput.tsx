import { ReactNode } from 'react'
import styled from 'styled-components'
import { Slider, SliderProps } from '.'

import { Panel } from '../../panel/Panel'
import { Text } from '../../text'
import { InputContainer } from '../InputContainer'
import { LabelText } from '../LabelText'

interface Props extends SliderProps {
  label: ReactNode
  formatValue: (value: number) => string
  alignValue?: 'start' | 'end'
}

const Content = styled.div`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 80px;
  align-items: center;
  gap: 16px;
`

export const AmountInput = ({
  value,
  step,
  min = 0,
  max,
  onChange,
  label,
  formatValue,
  color,
  size = 'l',
  alignValue = 'end',
}: Props) => {
  return (
    <InputContainer>
      {label && <LabelText>{label}</LabelText>}
      <Panel>
        <Content>
          <Slider
            step={step}
            size={size}
            min={min}
            max={max}
            onChange={onChange}
            value={value}
            color={color}
          />
          <Text style={{ textAlign: alignValue }} weight="600">
            {formatValue(value)}
          </Text>
        </Content>
      </Panel>
    </InputContainer>
  )
}
