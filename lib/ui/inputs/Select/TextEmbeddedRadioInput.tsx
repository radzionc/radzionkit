import React, { useId } from 'react'
import styled, { css } from 'styled-components'

import { absoluteOutline } from '../../css/absoluteOutline'
import { centerContent } from '../../css/centerContent'
import { interactive } from '../../css/interactive'
import { toSizeUnit } from '../../css/toSizeUnit'
import { InputProps, IsActiveProp, OptionsProp } from '../../props'
import { Text } from '../../text'
import { getColor } from '../../theme/getters'
import { InvisibleHTMLRadio } from '../InvisibleHTMLRadio'

type TextEmbeddedRadioInputProps<T extends string> = InputProps<T> &
  OptionsProp<T> & {
    renderOption: (option: T) => React.ReactNode
  }

const OptionsContainer = styled.div`
  display: flex;
`

const space = 8

const Option = styled.label<IsActiveProp>`
  height: 100%;
  ${interactive};
  ${centerContent};
  &:first-child {
    padding-left: ${toSizeUnit(space)};
    padding-right: ${toSizeUnit(space / 2)};
  }
  &:last-child {
    padding-left: ${toSizeUnit(space / 2)};
    padding-right: ${toSizeUnit(space)};
  }

  font-size: 600;

  ${({ isActive }) =>
    isActive
      ? css`
          ${OptionUnderline} {
            opacity: 1;
          }
          color: ${getColor('contrast')};
        `
      : css`
          color: ${getColor('textShy')};
          &:hover {
            color: ${getColor('textSupporting')};
          }
        `}
`

const OptionUnderline = styled.div`
  ${absoluteOutline(0, 4)};

  border-bottom: 2px dashed ${getColor('primary')};

  opacity: 0;
`

const OptionContent = styled.div`
  position: relative;
`

export function TextEmbeddedRadioInput<T extends string>({
  value,
  onChange,
  options,
  renderOption,
}: TextEmbeddedRadioInputProps<T>) {
  const groupName = useId()

  return (
    <OptionsContainer>
      {options.map((option) => {
        const isSelected = option === value

        return (
          <Option isActive={isSelected} key={option}>
            <InvisibleHTMLRadio
              isSelected={isSelected}
              value={option}
              groupName={groupName}
              onSelect={() => onChange(option)}
            />
            <OptionContent>
              <Text>{renderOption(option)}</Text>
              <OptionUnderline />
            </OptionContent>
          </Option>
        )
      })}
    </OptionsContainer>
  )
}
