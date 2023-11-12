import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { InputProps } from '../../props'
import { toSizeUnit } from '../../css/toSizeUnit'
import { useEffectOnDependencyChange } from '../../hooks/useEffectOnDependencyChange'
import { useKey } from 'react-use'
import { useBoolean } from '../../hooks/useBoolean'
import { IconButton } from '../../buttons/IconButton'
import { getSuggestions } from './getSuggestions'
import { NoMatchesMessage } from './NoMatchesMessage'
import { FixedOptionsInputItem } from './OptionItem'
import { FixedOptionsInputOptionsContainer } from './OptionsContainer'
import { FixedOptionsInputIdentifierWrapper } from './IdentifierWrapper'
import {
  useFloating,
  offset,
  shift,
  size,
  autoUpdate,
  useRole,
  useListNavigation,
  useInteractions,
} from '@floating-ui/react'
import { Text } from '../../text'
import { preventDefault } from '../../utils/preventDefault'
import { CloseIcon } from '../../icons/CloseIcon'
import { CollapseToggleButton } from '../../buttons/CollapseToggleButton'
import { useHasFocusWithin } from '../../hooks/useHasFocusWithin'
import { RelativeRow } from '../../layout/RelativeRow'
import { InputContainer } from '../InputContainer'
import { FixedOptionsInputButtonsContainer } from './ButtonsContainer'
import { FixedOptionsInputTextInput } from './TextInput'
import { fixedOptionsInputConfig } from './config'

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

  const labelHasFocusWithin = useHasFocusWithin(
    floatingOptions.refs.domReference,
  )

  const areOptionsVisible = !shouldHideOptions && labelHasFocusWithin

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
    <RelativeRow>
      <InputContainer
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
        <RelativeRow
          {...getReferenceProps({
            ref: floatingOptions.refs.setReference,
          })}
        >
          <FixedOptionsInputIdentifierWrapper>
            {value
              ? renderOptionIdentifier(value)
              : optionIdentifierPlaceholder}
          </FixedOptionsInputIdentifierWrapper>
          <FixedOptionsInputTextInput
            ref={inputElement}
            value={textInputValue}
            onChange={(event) => onTextInputChange(event.currentTarget.value)}
            placeholder={placeholder}
            onClick={stopHidingOptions}
            aria-autocomplete="list"
          />
          {areOptionsVisible && (
            <FixedOptionsInputOptionsContainer
              {...getFloatingProps({
                ref: floatingOptions.refs.setFloating,
                style: floatingOptions.floatingStyles,
              })}
            >
              {optionsToDisplay.length > 0 ? (
                optionsToDisplay.map((option, index) => (
                  <FixedOptionsInputItem
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
                  </FixedOptionsInputItem>
                ))
              ) : (
                <NoMatchesMessage />
              )}
            </FixedOptionsInputOptionsContainer>
          )}
        </RelativeRow>
      </InputContainer>
      <FixedOptionsInputButtonsContainer>
        {textInputValue && (
          <IconButton
            size={fixedOptionsInputConfig.iconButtonSize}
            icon={<CloseIcon />}
            title="Clear"
            kind="secondary"
            onClick={() => {
              onTextInputChange('')
              inputElement.current?.focus()
            }}
          />
        )}
        <CollapseToggleButton
          size={fixedOptionsInputConfig.iconButtonSize}
          kind="secondary"
          isOpen={areOptionsVisible}
          onClick={() => {
            if (labelHasFocusWithin) {
              toggleOptionsHiding()
            }
            inputElement.current?.focus()
          }}
        />
      </FixedOptionsInputButtonsContainer>
    </RelativeRow>
  )
}
