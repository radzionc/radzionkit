import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'

import { useRunOnChange } from '../../../hooks/useRunOnChange'
import { RelativeRow } from '../../../layout/RelativeRow'
import { InputProps } from '../../../props'
import { InputContainer } from '../../InputContainer'
import { InputLabel } from '../../InputLabel'
import { DropdownContainer } from '../DropdownContainer'
import { DropdownInputFrame } from '../DropdownInputFrame'

import { FixedOptionsInputButtons } from './Buttons'
import { FixedOptionInputMessage } from './FixedOptionInputMessage'
import { getSuggestions } from './getSuggestions'
import { FixedOptionsInputIdentifierWrapper } from './IdentifierWrapper'
import { FixedOptionsInputItem } from './OptionItem'
import { useFixedOptionsInputFloatingOptions } from './useFixedOptionsInputFloatingOptions'

export interface FixedOptionsInputProps<T> extends InputProps<T | null> {
  placeholder?: string
  label?: ReactNode

  options: T[]
  getOptionKey: (option: T) => string
  renderOption: (option: T) => ReactNode
  getOptionSearchStrings: (option: T) => string[]
  getOptionName: (option: T) => string
  renderOptionIdentifier: (option: T) => ReactNode
  optionIdentifierPlaceholder: ReactNode

  clearTextInputOnOptionSelect?: boolean
  noOptionsMessage?: ReactNode
  onTextInputValueChange?: (value: string) => void
}

export type FixedOptionsInputWrapperProps<T> = Pick<
  FixedOptionsInputProps<T>,
  | 'value'
  | 'onChange'
  | 'placeholder'
  | 'label'
  | 'options'
  | 'noOptionsMessage'
  | 'onTextInputValueChange'
  | 'clearTextInputOnOptionSelect'
> &
  Partial<Pick<FixedOptionsInputProps<T>, 'renderOption'>>

export function FixedOptionsInput<T>({
  value,
  label,
  onChange,
  placeholder,
  options,
  renderOption,
  getOptionSearchStrings,
  getOptionName,
  renderOptionIdentifier,
  optionIdentifierPlaceholder,
  getOptionKey,
  noOptionsMessage,
  onTextInputValueChange,
  clearTextInputOnOptionSelect,
}: FixedOptionsInputProps<T>) {
  const inputElement = useRef<HTMLInputElement>(null)

  const [textInputValue, setTextInputValue] = useState(() =>
    value ? getOptionName(value) : '',
  )

  const optionsToDisplay = useMemo(() => {
    if (value) {
      return options
    }

    return getSuggestions({
      inputValue: textInputValue,
      options,
      getOptionSearchStrings,
    })
  }, [getOptionSearchStrings, options, textInputValue, value])

  const {
    activeIndex,
    setActiveIndex,
    getReferenceProps,
    setReferenceRef,
    getFloatingProps,
    setFloatingRef,
    floatingStyles,
    getItemProps,
    optionsRef,
    areOptionsVisible,
    showOptions,
    hideOptions,
    toggleOptionsVisibility,
  } = useFixedOptionsInputFloatingOptions()

  useRunOnChange(() => {
    if (!value) {
      if (textInputValue) {
        setTextInputValue('')
      }
    } else {
      const valueName = getOptionName(value)
      if (textInputValue === valueName) return

      setTextInputValue(valueName)
    }
  }, [value])

  const onOptionSelect = useCallback(
    (option: T) => {
      onChange(option)
      inputElement.current?.blur()
      if (clearTextInputOnOptionSelect) {
        setTextInputValue('')
      }
    },
    [clearTextInputOnOptionSelect, onChange],
  )

  const onTextInputChange = useCallback(
    (newValue: string) => {
      showOptions()

      onTextInputValueChange?.(newValue)

      if (newValue === '') {
        onChange(null)
      }

      setTextInputValue(newValue)
    },
    [onChange, onTextInputValueChange, showOptions],
  )

  useRunOnChange(() => {
    if (!areOptionsVisible || optionsToDisplay.length === 0) return

    setActiveIndex(0)
  }, [textInputValue])

  return (
    <InputContainer
      onClick={(event) => {
        const isClickComesFromInput = inputElement.current?.contains(
          event.target as Node,
        )
        if (isClickComesFromInput) {
          showOptions()
        } else {
          event.stopPropagation()
          event.preventDefault()
        }
      }}
      onKeyDown={(event: React.KeyboardEvent<HTMLLabelElement>) => {
        if (event.key === 'Enter' && activeIndex != null) {
          event.preventDefault()
          onOptionSelect(optionsToDisplay[activeIndex])
          setActiveIndex(null)
          hideOptions()
        }
        if (event.key === 'Escape' && areOptionsVisible) {
          event.stopPropagation()
          hideOptions()
        }
      }}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <RelativeRow
        {...getReferenceProps({
          ref: setReferenceRef,
        })}
      >
        <FixedOptionsInputIdentifierWrapper>
          {value ? renderOptionIdentifier(value) : optionIdentifierPlaceholder}
        </FixedOptionsInputIdentifierWrapper>
        <DropdownInputFrame
          ref={inputElement}
          value={textInputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onTextInputChange(event.currentTarget.value)
          }
          placeholder={placeholder}
          aria-autocomplete="list"
        />
        {areOptionsVisible && (
          <DropdownContainer
            {...getFloatingProps({
              ref: setFloatingRef,
              style: floatingStyles,
            })}
          >
            {optionsToDisplay.length > 0 ? (
              optionsToDisplay.map((option, index) => (
                <FixedOptionsInputItem
                  {...getItemProps({
                    ref: (element) => {
                      optionsRef.current[index] = element
                    },
                    key: getOptionKey(option),
                    onClick: () => {
                      onOptionSelect(option)
                      inputElement.current?.focus()
                      hideOptions()
                    },
                  })}
                  isActive={index === activeIndex}
                >
                  {renderOption(option)}
                </FixedOptionsInputItem>
              ))
            ) : (
              <FixedOptionInputMessage>
                {noOptionsMessage ?? 'No options'}
              </FixedOptionInputMessage>
            )}
          </DropdownContainer>
        )}
        <FixedOptionsInputButtons
          onClear={
            textInputValue || value
              ? () => {
                  onTextInputChange('')
                  inputElement.current?.focus()
                }
              : undefined
          }
          areOptionsVisible={areOptionsVisible}
          toggleOptionsVisibility={() => {
            toggleOptionsVisibility()
            inputElement.current?.focus()
          }}
        />
      </RelativeRow>
    </InputContainer>
  )
}
