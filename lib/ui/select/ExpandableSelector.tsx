import { FloatingOptionsContainer } from '../floating/FloatingOptionsContainer'
import { useFloatingOptions } from '../floating/useFloatingOptions'
import { UIComponentProps } from '../props'
import { OptionItem } from './OptionItem'
import { ExpandableSelectorToggle } from './ExpandableSelectorToggle'
import { FloatingFocusManager } from '@floating-ui/react'
import { OptionContent } from './OptionContent'
import { OptionOutline } from './OptionOutline'
import { ExpandableSelectorContainer } from './ExpandableSelectorContainer'

export type ExpandableSelectorProp<T> = UIComponentProps & {
  value: T | null
  onChange: (value: T) => void
  isDisabled?: boolean
  options: readonly T[]
  getOptionKey: (option: T) => string
  renderOption: (option: T) => React.ReactNode
  openerContent?: React.ReactNode
  floatingOptionsWidthSameAsOpener?: boolean
  showToggle?: boolean
  returnFocus?: boolean
}

export function ExpandableSelector<T>({
  value,
  onChange,
  options,
  isDisabled,
  renderOption,
  getOptionKey,
  openerContent,
  floatingOptionsWidthSameAsOpener,
  showToggle = true,
  returnFocus = false,
  ...rest
}: ExpandableSelectorProp<T>) {
  const {
    getReferenceProps,
    getFloatingProps,
    getOptionProps,
    isOpen,
    setIsOpen,
    activeIndex,
    context,
  } = useFloatingOptions({
    floatingOptionsWidthSameAsOpener,
    selectedIndex: value === null ? null : options.indexOf(value),
  })

  const referenceProps = isDisabled ? {} : getReferenceProps()

  return (
    <>
      <ExpandableSelectorContainer
        isDisabled={isDisabled}
        isActive={isOpen}
        {...referenceProps}
        {...rest}
      >
        <OptionContent>
          {openerContent ?? renderOption(value as T)}
        </OptionContent>
        {showToggle && <ExpandableSelectorToggle isOpen={isOpen} />}
      </ExpandableSelectorContainer>
      {isOpen && !isDisabled && (
        <FloatingFocusManager context={context} modal returnFocus={returnFocus}>
          <FloatingOptionsContainer {...getFloatingProps()}>
            {options.map((option, index) => (
              <OptionItem
                key={getOptionKey(option)}
                isActive={activeIndex === index}
                {...getOptionProps({
                  index,
                  onSelect: () => {
                    onChange(option)
                    setIsOpen(false)
                  },
                })}
              >
                <OptionContent>{renderOption(option)}</OptionContent>
                {option === value && <OptionOutline />}
              </OptionItem>
            ))}
          </FloatingOptionsContainer>
        </FloatingFocusManager>
      )}
    </>
  )
}
