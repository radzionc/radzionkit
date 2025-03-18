import { HStack } from '@lib/ui/css/stack'
import { useId } from 'react'
import styled, { css } from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { horizontalPadding } from '../css/horizontalPadding'
import { interactive } from '../css/interactive'
import { IsActiveProp, InputProps, UiProps } from '../props'
import { getColor, matchColor } from '../theme/getters'

import { InvisibleHTMLRadio } from './InvisibleHTMLRadio'

type RadioInputProps<T extends string> = InputProps<T> &
  UiProps & {
    options: readonly T[]
    renderOption: (option: T) => React.ReactNode
  }

const Wrapper = styled(HStack)`
  gap: 2px;
  padding: 2px;
  ${borderRadius.m};
  border: 2px solid ${getColor('mistExtra')};
  flex-wrap: wrap;
`

const Container = styled.label<IsActiveProp>`
  position: relative;
  min-height: 32px;
  ${horizontalPadding(12)};
  ${borderRadius.s};
  display: flex;
  align-items: center;
  ${interactive};
  ${({ isActive }) =>
    isActive
      ? css`
          background: ${getColor('mistExtra')};
        `
      : css`
          &:hover {
            background: ${getColor('mist')};
          }
        `}

  color: ${matchColor('isActive', {
    true: 'contrast',
    false: 'textSupporting',
  })};
`

export const GroupedRadioInput = <T extends string>({
  value,
  onChange,
  options,
  renderOption,
  ...rest
}: RadioInputProps<T>) => {
  const groupName = useId()

  return (
    <Wrapper {...rest}>
      {options.map((option) => {
        const isSelected = option === value

        return (
          <Container isActive={isSelected} key={option}>
            {renderOption(option)}
            <InvisibleHTMLRadio
              isSelected={isSelected}
              value={option}
              groupName={groupName}
              onSelect={() => {
                onChange(option)
              }}
            />
          </Container>
        )
      })}
    </Wrapper>
  )
}
