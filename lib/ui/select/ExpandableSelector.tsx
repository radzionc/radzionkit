import { FloatingOptionsContainer } from '../floating/FloatingOptionsContainer'
import { useFloatingOptions } from '../floating/useFloatingOptions'
import { UiProps } from '../props'
import { OptionItem } from './OptionItem'
import { ExpandableSelectorToggle } from './ExpandableSelectorToggle'
import { FloatingFocusManager } from '@floating-ui/react'
import { OptionContent } from './OptionContent'
import { ExpandableSelectorContainer } from './ExpandableSelectorContainer'
import { WithSelectionMark } from './WithSelectionMark'

export type ExpandableSelectorProp<T> = UiProps & {
  value: T | null
  onChange: (value: T) => void
  isDisabled?: boolean
  options: readonly T[]
  getOptionKey: (option: T) => string
  getOptionName?: (option: T) => string
  renderOption?: (option: T) => React.ReactNode
  openerContent?: React.ReactNode
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
  getOptionName,
  openerContent,
  showToggle = true,
  returnFocus = true,
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
    strategy: 'fixed',
    selectedIndex: value === null ? null : options.indexOf(value),
    placement: 'bottom-start',
    options: options.map(getOptionKey ?? getOptionName),
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
          {openerContent ??
            (renderOption ?? getOptionName ?? getOptionKey)(value as T)}
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
                <OptionContent>
                  <WithSelectionMark isSelected={value === option}>
                    {(renderOption ?? getOptionName ?? getOptionKey)(option)}
                  </WithSelectionMark>
                </OptionContent>
              </OptionItem>
            ))}
          </FloatingOptionsContainer>
        </FloatingFocusManager>
      )}
    </>
  )
}
