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
import { textInput, textInputPadding } from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useEffectOnDependencyChange } from '../../hooks/useEffectOnDependencyChange'
import { useKey } from 'react-use'
import { useBoolean } from '../../hooks/useBoolean'
import { buttonSize, buttonsSpacing, identifierSize } from './config'
import { iconButtonSizeRecord } from '../../buttons/IconButton'
import { useHasFocusWithin } from '../../hooks/useHasFocusWithin'
import { getSuggestions } from './getSuggestions'
import { NoMatchesMessage } from './NoMatchesMessage'
import { OptionItem } from './OptionItem'
import { OptionsContainer } from './OptionsContainer'
import { IdentifierWrapper } from './IdentifierWrapper'
import { InputButtons } from './InputButtons'
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

interface FixedOptionsInputProps<T> extends InputProps<T | undefined> {
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
  const containerRef = useRef<HTMLLabelElement>(null)
  const hasFocusWithin = useHasFocusWithin(containerRef)

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

  const areOptionsVisible = hasFocusWithin && !shouldHideOptions

  useEffect(() => {
    if (
      areOptionsVisible &&
      optionsToDisplay.length > 0 &&
      activeIndex === null
    ) {
      setActiveIndex(0)
    }
  }, [activeIndex, areOptionsVisible, optionsToDisplay.length])

  const listRef = useRef<Array<HTMLElement | null>>([])

  const { refs, floatingStyles, context } = useFloating<HTMLDivElement>({
    placement: 'bottom-start',
    strategy: 'absolute',
    open: areOptionsVisible,
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

  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  })

  const role = useRole(context, { role: 'listbox' })

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
        onChange(undefined)
      }

      setTextInputValue(newValue)
    },
    [getOptionName, onChange, stopHidingOptions, value],
  )

  useKey('Escape', hideOptions)

  return (
    <Container
      onKeyDown={(event) => {
        if (event.key === 'Enter' && activeIndex != null) {
          onChange(optionsToDisplay[activeIndex])
          setActiveIndex(null)
          hideOptions()
        }
      }}
      ref={containerRef}
    >
      {label && <Text as="div">{label}</Text>}
      <Wrapper
        {...getReferenceProps({
          ref: refs.setReference,
        })}
      >
        <IdentifierWrapper>
          {value ? renderOptionIdentifier(value) : optionIdentifierPlaceholder}
        </IdentifierWrapper>
        <InputButtons
          hasValue={!!value}
          onClean={() => {
            onTextInputChange('')
          }}
          areOptionsVisible={areOptionsVisible}
          toggleOptionsVisibility={() => {
            if (hasFocusWithin) {
              toggleOptionsHiding()
            }
          }}
        />
        <TextInput
          ref={inputElement}
          value={textInputValue}
          onChange={(event) => onTextInputChange(event.currentTarget.value)}
          placeholder={placeholder}
          onClick={stopHidingOptions}
          aria-autocomplete="list"
        />
        {areOptionsVisible && (
          <OptionsContainer
            {...getFloatingProps({
              ref: refs.setFloating,
              style: floatingStyles,
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
                    onClick: () => {
                      onChange(option)
                      inputElement.current?.focus()
                      hideOptions()
                    },
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
  )
}
