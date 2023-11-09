import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { InputProps } from '../../props'
import styled from 'styled-components'
import {
  textInput,
  textInputBorderRadius,
  textInputPadding,
} from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useEffectOnDependencyChange } from '../../hooks/useEffectOnDependencyChange'
import { getColor } from '../../theme/getters'
import { transition } from '../../css/transition'
import { horizontalPadding } from '../../css/horizontalPadding'
import { verticalPadding } from '../../css/verticalPadding'
import { UnstyledButton } from '../../buttons/UnstyledButton'
import { preventDefault } from '../../utils/preventDefault'
import { useKey } from 'react-use'
import { useBoolean } from '../../hooks/useBoolean'
import { buttonSize, buttonsSpacing, identifierSize } from './config'
import { useFloatingOptionsContainer } from './useFloatingOptionsContainer'
import { IconButton, iconButtonSizeRecord } from '../../buttons/IconButton'
import { HStack } from '../../layout/Stack'
import { CloseIcon } from '../../icons/CloseIcon'
import { CollapseToggleButton } from '../../buttons/CollapseToggleButton'
import { useHasFocusWithin } from '../../hooks/useHasFocusWithin'
import { getSuggestions } from './getSuggestions'

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
  border: 1px solid ${getColor('mist')};

  border-radius: ${toSizeUnit(textInputBorderRadius)};
  overflow: hidden;
  max-height: 280px;
  overflow-y: auto;
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

const TextInput = styled.input`
  ${textInput};
  padding-left: ${toSizeUnit(identifierSize + textInputPadding * 2)};
  padding-right: ${toSizeUnit(
    iconButtonSizeRecord[buttonSize] * 2 + buttonsSpacing + textInputPadding,
  )};
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

const NoOptionsMessage = styled.div`
  ${horizontalPadding(textInputPadding)};
  ${verticalPadding(8)}
`

const ButtonsContainer = styled(HStack)`
  align-items: center;
  gap: ${toSizeUnit(buttonsSpacing)};
  position: absolute;
  right: ${toSizeUnit(textInputPadding)};
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
  const wrapperElement = useRef<HTMLDivElement>(null)
  const hasFocusWithin = useHasFocusWithin(wrapperElement)

  const inputElement = useRef<HTMLInputElement>(null)
  const [
    shouldHideOptions,
    { set: hideOptions, unset: stopHidingOptions, toggle: toggleOptionsHiding },
  ] = useBoolean(false)

  const floatingOptionsContainer = useFloatingOptionsContainer()
  useEffect(() => {
    floatingOptionsContainer.refs.setReference(wrapperElement.current)
  }, [floatingOptionsContainer.refs])

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

    return getSuggestions({
      inputValue: textInputValue,
      options,
      getOptionSearchStrings,
    })
  }, [getOptionSearchStrings, options, textInputValue, value])

  useKey('Escape', hideOptions)

  const areOptionsVisible = hasFocusWithin && !shouldHideOptions

  return (
    <Wrapper ref={wrapperElement}>
      <IdentifierWrapper>
        {value ? renderOptionIdentifier(value) : optionIdentifierPlaceholder}
      </IdentifierWrapper>
      <ButtonsContainer>
        {value && (
          <IconButton
            size={buttonSize}
            icon={<CloseIcon />}
            title="Clear"
            as="div"
            kind="secondary"
            onClick={preventDefault(() => {
              onTextInputChange('')
            })}
          />
        )}
        <CollapseToggleButton
          size={buttonSize}
          as="div"
          type="button"
          kind="secondary"
          isOpen={areOptionsVisible}
          onClick={preventDefault(() => {
            if (!hasFocusWithin) return
            toggleOptionsHiding()
          })}
        />
      </ButtonsContainer>
      <TextInput
        ref={inputElement}
        value={textInputValue}
        onChange={(event) => onTextInputChange(event.currentTarget.value)}
        placeholder={placeholder}
        onClick={stopHidingOptions}
      />
      {areOptionsVisible && (
        <OptionsContainer
          style={floatingOptionsContainer.floatingStyles}
          ref={floatingOptionsContainer.refs.setFloating}
        >
          {optionsToDisplay.length > 0 ? (
            optionsToDisplay.map((option, index) => (
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
            ))
          ) : (
            <NoOptionsMessage>No results</NoOptionsMessage>
          )}
        </OptionsContainer>
      )}
    </Wrapper>
  )
}
