import { ReactNode } from 'react'
import styled from 'styled-components'

import { CollapseToggleButton } from '../../buttons/CollapseToggleButton'
import { interactive } from '../../css/interactive'
import { textInputHorizontalPadding } from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useFloatingOptions } from '../../floating/useFloatingOptions'
import { RelativeRow } from '../../layout/RelativeRow'
import { InputProps } from '../../props'
import { InputContainer } from '../InputContainer'
import { InputLabel } from '../InputLabel'

import { dropdownInputConfig } from './config'
import { DropdownContainer } from './DropdownContainer'
import { DropdownIdentifierWrapper } from './DropdownIdentifierWrapper'
import { DropdownInputFrame } from './DropdownInputFrame'
import { DropdownOption } from './DropdownOption'

export interface SelectOptionInputProps<T> extends InputProps<T> {
  label?: ReactNode

  options: T[]
  getOptionKey: (option: T) => string
  renderOption: (option: T) => ReactNode
  valueIdentifier: ReactNode
  valueName: string
}

export type SelectOptionInputWrapperProps<T> = Pick<
  SelectOptionInputProps<T>,
  'value' | 'onChange' | 'label' | 'options'
>

const Container = styled(DropdownInputFrame)`
  ${interactive};
  display: flex;
  align-items: center;
`

const CollapsePosition = styled.div`
  position: absolute;
  right: ${toSizeUnit(textInputHorizontalPadding)};
`

export function SelectOptionInput<T>({
  value,
  label,
  onChange,
  options,
  renderOption,
  valueIdentifier,
  valueName,
  getOptionKey,
}: SelectOptionInputProps<T>) {
  const {
    getReferenceProps,
    getFloatingProps,
    getOptionProps,
    isOpen,
    setIsOpen,
    activeIndex,
  } = useFloatingOptions({
    selectedIndex: options.indexOf(value),
  })

  return (
    <InputContainer as="div">
      {label && <InputLabel>{label}</InputLabel>}
      <RelativeRow {...getReferenceProps()}>
        <DropdownIdentifierWrapper>{valueIdentifier}</DropdownIdentifierWrapper>
        <Container as="div">{valueName}</Container>
        <CollapsePosition>
          <CollapseToggleButton
            size={dropdownInputConfig.iconButtonSize}
            as="div"
            kind="secondary"
            isOpen={isOpen}
          />
        </CollapsePosition>
      </RelativeRow>
      {isOpen && (
        <DropdownContainer {...getFloatingProps()}>
          {options.map((option, index) => (
            <DropdownOption
              isActive={activeIndex === index}
              key={getOptionKey(option)}
              {...getOptionProps({
                index,
                onSelect: () => {
                  onChange(option)
                  setIsOpen(false)
                },
              })}
            >
              {renderOption(option)}
            </DropdownOption>
          ))}
        </DropdownContainer>
      )}
    </InputContainer>
  )
}
