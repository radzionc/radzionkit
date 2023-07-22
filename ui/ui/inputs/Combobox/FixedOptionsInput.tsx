import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { usePrevious } from 'react-use'
import styled from 'styled-components'

import { InputWrapperWithErrorMessage } from '../InputWrapper'
import { TextInputContainer, TextInputLoader } from '../TextInput'
import { ComboboxOptions } from './ComboboxOptions'
import { DropdownMenuPlacer } from './DropdownMenuPlacer'
import { defaultInputShapeCSS } from '../config'
import { CollapseToggleButton } from '../../buttons/CollapseToggleButton'
import { getColor } from '../../theme/getters'
import { useBoolean } from '../../../shared/hooks/useBoolean'
import { useKeyPress } from '../../../shared/hooks/useKeyPress'
import { Text } from '../../Text'

interface Props<T> {
  label: React.ReactNode
  placeholder: string
  error?: string
  value: T | null
  onChange: (value: T | null) => void

  isLoading?: boolean
  noOptionsMessage?: string

  options: T[]
  optionToString: (option: T) => string
  renderOption?: (option: T) => ReactNode
  clearAfterOptionSelected?: boolean
}

const Container = styled.div`
  position: relative;
  width: 100%;
`

const ToggleWrapper = styled.div`
  position: absolute;
  right: 8px;
  bottom: 26px;
  display: flex;
`

const NoOptions = styled.div`
  ${defaultInputShapeCSS};
  background: ${getColor('mistExtra')};
  display: flex;
  align-items: center;
`

function FixedOptionsInputInner<T>(
  {
    label,
    placeholder,

    options,
    value,
    onChange,

    optionToString,

    noOptionsMessage = 'No options left',

    isLoading,

    error,
    renderOption = optionToString,
    clearAfterOptionSelected,
  }: Props<T>,
  ref: ForwardedRef<HTMLInputElement | null>,
) {
  const containerRef = useRef<HTMLDivElement>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  const [isMenuOpen, { set: openMenu, unset: closeMenu, toggle: toggleMenu }] =
    useBoolean(false)
  useEffect(() => {
    const isInputFocused = document.activeElement === inputRef.current

    if (isMenuOpen && !isInputFocused) {
      inputRef.current?.focus()
    } else if (!isMenuOpen && isInputFocused) {
      inputRef.current?.blur()
    }
  }, [isMenuOpen])

  const previousValue = usePrevious(value)

  const [inputValue, setInputValue] = useState('')

  const [suggestions, setSuggestions] = useState(options)

  useEffect(() => {
    const lowerCaseInputValue = inputValue.toLowerCase()

    const newSuggestions =
      value && optionToString(value).toLowerCase() === lowerCaseInputValue
        ? options
        : options.filter((item) =>
            optionToString(item).toLowerCase().includes(lowerCaseInputValue),
          )

    setSuggestions(newSuggestions)
  }, [inputValue, onChange, optionToString, options, value])

  const isSelectionAvailalbe = isMenuOpen && suggestions.length > 0

  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const handleSelectOption = useCallback(
    (option: T) => {
      const optionAsString = clearAfterOptionSelected
        ? ''
        : optionToString(option)
      setInputValue(optionAsString)

      onChange(option)
      closeMenu()
    },
    [optionToString, onChange, closeMenu, clearAfterOptionSelected],
  )

  useEffect(() => {
    if (previousValue !== value) {
      setInputValue(value ? optionToString(value) : '')
    }
  }, [optionToString, previousValue, value])

  useKeyPress(
    'Enter',
    () => {
      if (highlightedIndex !== null) {
        handleSelectOption(suggestions[highlightedIndex])
      }
    },
    { isEnabled: isSelectionAvailalbe, shouldStopPropagation: true },
  )

  return (
    <Container
      ref={containerRef}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) {
          closeMenu()
        }
      }}
    >
      <InputWrapperWithErrorMessage label={label} error={error}>
        {isLoading ? (
          <TextInputLoader />
        ) : options.length === 0 ? (
          <NoOptions>
            <Text as="div" color="supporting">
              {noOptionsMessage}
            </Text>
          </NoOptions>
        ) : (
          <DropdownMenuPlacer
            menu={
              isMenuOpen && suggestions.length ? (
                <ComboboxOptions
                  options={suggestions}
                  renderOption={renderOption}
                  optionToKey={optionToString}
                  onOptionHighlight={setHighlightedIndex}
                  onOptionSelect={handleSelectOption}
                  highlightedIndex={highlightedIndex}
                />
              ) : undefined
            }
          >
            <TextInputContainer
              onChange={({ currentTarget: { value } }) => {
                setInputValue(value)

                if (value === '') {
                  onChange(null)
                }
              }}
              value={inputValue}
              isValid={!error}
              placeholder={placeholder}
              ref={inputRef}
              onFocus={openMenu}
            />
          </DropdownMenuPlacer>
        )}
      </InputWrapperWithErrorMessage>
      {!isLoading && options.length > 0 && (
        <ToggleWrapper>
          <CollapseToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </ToggleWrapper>
      )}
    </Container>
  )
}

// Redecalare forwardRef
declare module 'react' {
  function forwardRef<T, P>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

export const FixedOptionsInput = forwardRef(FixedOptionsInputInner)
