import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { InputProps } from '../../../props'
import { useEffectOnDependencyChange } from '../../../hooks/useEffectOnDependencyChange'
import { getSuggestions } from './getSuggestions'
import { FixedOptionInputMessage } from './FixedOptionInputMessage'
import { FixedOptionsInputItem } from './OptionItem'
import { FixedOptionsInputIdentifierWrapper } from './IdentifierWrapper'
import { RelativeRow } from '../../../layout/RelativeRow'
import { InputContainer } from '../../InputContainer'
import { useFixedOptionsInputFloatingOptions } from './useFixedOptionsInputFloatingOptions'
import { FixedOptionsInputButtons } from './Buttons'
import { LabelText } from '../../LabelText'
import { DropdownContainer } from '../DropdownContainer'
import { DropdownInputFrame } from '../DropdownInputFrame'

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
>

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

  useEffectOnDependencyChange(() => {
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

  useEffectOnDependencyChange(() => {
    if (!areOptionsVisible || optionsToDisplay.length === 0) return

    setActiveIndex(0)
  }, [textInputValue])

  return (
    <InputContainer
      onClick={() => {
        inputElement.current?.focus()
      }}
      onKeyDown={(event) => {
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
      {label && <LabelText>{label}</LabelText>}
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
          onChange={(event) => onTextInputChange(event.currentTarget.value)}
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
                  active={index === activeIndex}
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
