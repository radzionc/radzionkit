import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { InputProps } from '../../props'
import styled from 'styled-components'
import {
  textInput,
  textInputHeight,
  textInputPadding,
} from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useEffectOnDependencyChange } from '../../hooks/useEffectOnDependencyChange'
import { useKey } from 'react-use'
import { useBoolean } from '../../hooks/useBoolean'
import { buttonSize, buttonsSpacing, identifierSize } from './config'
import { IconButton, iconButtonSizeRecord } from '../../buttons/IconButton'
import { getSuggestions } from './getSuggestions'
import { NoMatchesMessage } from './NoMatchesMessage'
import { OptionItem } from './OptionItem'
import { OptionsContainer } from './OptionsContainer'
import { IdentifierWrapper } from './IdentifierWrapper'
import { inputContainer } from '../../css/inputContainer'
import {
  useFloating,
  offset,
  flip,
  shift,
  size,
  autoUpdate,
  useRole,
  useListNavigation,
  useInteractions,
} from '@floating-ui/react'
import { Text } from '../../text'
import { preventDefault } from '../../utils/preventDefault'
import { HStack } from '../../layout/Stack'
import { CloseIcon } from '../../icons/CloseIcon'
import { CollapseToggleButton } from '../../buttons/CollapseToggleButton'

interface FixedOptionsInputProps<T> extends InputProps<T | null> {
  placeholder?: string
  label?: ReactNode

  options: T[]
  getOptionKey: (option: T) => string
  renderOption: (option: T) => ReactNode
  getOptionSearchStrings: (option: T) => string[]
  getOptionName: (option: T) => string
  renderOptionIdentifier: (option: T) => ReactNode
  optionIdentifierPlaceholder: ReactNode
}

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

const Container = styled.label`
  ${inputContainer};

  :focus-within ${OptionsContainer} {
    display: initial;
  }
`

const ButtonsContainer = styled(HStack)`
  position: absolute;
  gap: 4px;
  right: ${toSizeUnit(textInputPadding)};
  bottom: ${toSizeUnit(
    (textInputHeight - iconButtonSizeRecord[buttonSize]) / 2,
  )};
`

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
}: FixedOptionsInputProps<T>) {
  const inputElement = useRef<HTMLInputElement>(null)

  const [
    shouldHideOptions,
    { set: hideOptions, unset: stopHidingOptions, toggle: toggleOptionsHiding },
  ] = useBoolean(false)

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

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const floatingOptions = useFloating<HTMLDivElement>({
    placement: 'bottom-start',
    strategy: 'fixed',
    open: !shouldHideOptions,
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

  const listNav = useListNavigation(floatingOptions.context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  })

  const role = useRole(floatingOptions.context, { role: 'listbox' })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, listNav],
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
        onChange(null)
      }

      setTextInputValue(newValue)
    },
    [getOptionName, onChange, stopHidingOptions, value],
  )

  useEffectOnDependencyChange(() => {
    if (shouldHideOptions || optionsToDisplay.length === 0) return

    setActiveIndex(0)
  }, [textInputValue])

  useKey('Escape', hideOptions)

  return (
    <>
      <Wrapper>
        <Container
          onKeyDown={(event) => {
            if (event.key === 'Enter' && activeIndex != null) {
              event.preventDefault()
              onChange(optionsToDisplay[activeIndex])
              setActiveIndex(null)
              hideOptions()
            }
          }}
        >
          {label && <Text as="div">{label}</Text>}
          <Wrapper
            {...getReferenceProps({
              ref: floatingOptions.refs.setReference,
            })}
          >
            <IdentifierWrapper>
              {value
                ? renderOptionIdentifier(value)
                : optionIdentifierPlaceholder}
            </IdentifierWrapper>
            <TextInput
              ref={inputElement}
              value={textInputValue}
              onChange={(event) => onTextInputChange(event.currentTarget.value)}
              placeholder={placeholder}
              onClick={stopHidingOptions}
              aria-autocomplete="list"
            />
            {!shouldHideOptions && (
              <OptionsContainer
                {...getFloatingProps({
                  ref: floatingOptions.refs.setFloating,
                  style: floatingOptions.floatingStyles,
                })}
              >
                {optionsToDisplay.length > 0 ? (
                  optionsToDisplay.map((option, index) => (
                    <OptionItem
                      {...getItemProps({
                        ref: (element) => {
                          listRef.current[index] = element
                        },
                        key: getOptionKey(option),
                        onClick: preventDefault(() => {
                          onChange(option)
                          inputElement.current?.focus()
                          hideOptions()
                        }),
                      })}
                      active={index === activeIndex}
                    >
                      {renderOption(option)}
                    </OptionItem>
                  ))
                ) : (
                  <NoMatchesMessage />
                )}
              </OptionsContainer>
            )}
          </Wrapper>
        </Container>
        <ButtonsContainer>
          <IconButton
            size={buttonSize}
            icon={<CloseIcon />}
            title="Clear"
            kind="secondary"
            onClick={() => {
              onTextInputChange('')
              inputElement.current?.focus()
            }}
          />
          <CollapseToggleButton
            size={buttonSize}
            kind="secondary"
            isOpen={!shouldHideOptions}
            onClick={() => {
              toggleOptionsHiding()
              inputElement.current?.focus()
            }}
          />
        </ButtonsContainer>
      </Wrapper>
    </>
  )
}
