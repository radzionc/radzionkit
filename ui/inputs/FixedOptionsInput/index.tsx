import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { InputProps } from '../../props'
import styled from 'styled-components'
import { textInput, textInputPadding } from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useEffectOnDependencyChange } from '../../hooks/useEffectOnDependencyChange'
import {
  useFloating,
  offset,
  flip,
  shift,
  size,
  autoUpdate,
} from '@floating-ui/react'
import { getColor } from '../../theme/getters'
import { transition } from '../../css/transition'
import { horizontalPadding } from '../../css/horizontalPadding'
import { verticalPadding } from '../../css/verticalPadding'
import { UnstyledButton } from '../../buttons/UnstyledButton'
import { preventDefault } from '../../utils/preventDefault'
import { useKey } from 'react-use'
import { useBoolean } from '../../hooks/useBoolean'
import { identifierSize } from './config'

interface FixedOptionsInputProps<T> extends InputProps<T | undefined> {
  placeholder?: string

  options: T[]
  renderOption: (option: T) => ReactNode
  getOptionSearchStrings: (option: T) => string[]
  getOptionName: (option: T) => string
  renderOptionIdentifier: (option: T) => ReactNode
  optionIdentifierPlaceholder: ReactNode
}

const IdentifierWrapper = styled.div`
  position: absolute;
  font-size: ${toSizeUnit(identifierSize)};
  left: ${toSizeUnit(textInputPadding)};
  pointer-events: none;
  display: flex;
`

const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  background: ${getColor('foreground')};
  border-radius: 8px;
  overflow: hidden;
  max-height: 280px;
  overflow-y: auto;

  display: none;
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  :focus-within ${OptionsContainer} {
    display: initial;
  }
`

const TextInput = styled.input`
  ${textInput};
  padding-left: ${toSizeUnit(identifierSize + textInputPadding * 2)};
`

const OptionItem = styled(UnstyledButton)`
  width: 100%;
  ${transition};
  cursor: pointer;

  ${horizontalPadding(textInputPadding)};
  ${verticalPadding(8)}
  :hover {
    background: ${getColor('mist')};
  }
`

export function FixedOptionsInput<T>({
  value,
  onChange,
  placeholder,
  options,
  renderOption,
  getOptionSearchStrings,
  getOptionName,
  renderOptionIdentifier,
  optionIdentifierPlaceholder,
}: FixedOptionsInputProps<T>) {
  const inputElement = useRef<HTMLInputElement>(null)
  const [shouldHideOptions, { set: hideOptions, unset: stopHidingOptions }] =
    useBoolean(false)

  const optionsContainer = useFloating({
    placement: 'bottom-start',
    strategy: 'absolute',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: toSizeUnit(rects.reference.width),
          })
        },
      }),
    ],
  })

  const [textInputValue, setTextInputValue] = useState(() =>
    value ? getOptionName(value) : '',
  )

  useEffectOnDependencyChange(() => {
    if (!value) return

    const valueName = getOptionName(value)
    if (textInputValue === valueName) return

    setTextInputValue(valueName)
  }, [value])

  const onTextInputChange = useCallback(
    (newValue: string) => {
      stopHidingOptions()
      if (value && newValue !== getOptionName(value)) {
        onChange(undefined)
      }

      setTextInputValue(newValue)
    },
    [getOptionName, onChange, stopHidingOptions, value],
  )

  const optionsToDisplay = useMemo(() => {
    if (value) {
      return options
    }

    const matchString = textInputValue.toLowerCase()

    return options.filter((option) =>
      getOptionSearchStrings(option).some((searchString) =>
        searchString.toLowerCase().includes(matchString),
      ),
    )
  }, [getOptionSearchStrings, options, textInputValue, value])

  useKey('Escape', hideOptions)

  return (
    <Wrapper ref={optionsContainer.refs.setReference}>
      <IdentifierWrapper>
        {value ? renderOptionIdentifier(value) : optionIdentifierPlaceholder}
      </IdentifierWrapper>
      <TextInput
        ref={inputElement}
        value={textInputValue}
        onChange={(event) => onTextInputChange(event.currentTarget.value)}
        placeholder={placeholder}
        onClick={stopHidingOptions}
      />
      {!shouldHideOptions && (
        <OptionsContainer
          style={optionsContainer.floatingStyles}
          ref={optionsContainer.refs.setFloating}
        >
          {optionsToDisplay.map((option, index) => (
            <OptionItem
              type="button"
              onClick={preventDefault(() => {
                onChange(option)
                inputElement.current?.focus()
                hideOptions()
              })}
              key={index}
            >
              {renderOption(option)}
            </OptionItem>
          ))}
        </OptionsContainer>
      )}
    </Wrapper>
  )
}
