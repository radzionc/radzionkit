import styled, { css } from 'styled-components'
import { absoluteOutline } from '../css/absoluteOutline'
import { interactive } from '../css/interactive'
import { transition } from '../css/transition'
import { FloatingOptionsContainer } from '../floating/FloatingOptionsContainer'
import { useFloatingOptions } from '../floating/useFloatingOptions'
import { HStack } from '../layout/Stack'
import { UIComponentProps } from '../props'
import { getColor } from '../theme/getters'
import { getHoverVariant } from '../theme/getHoverVariant'
import { cropText } from '../css/cropText'
import { SelectContainer } from './SelectContainer'
import { borderRadius } from '../css/borderRadius'
import { OptionItem } from './OptionItem'
import { CollapsableStateIndicator } from '../layout/CollapsableStateIndicator'
import { FloatingFocusManager } from '@floating-ui/react'

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

const ToggleIconContainer = styled(CollapsableStateIndicator)`
  font-size: 16px;
  ${transition};
  color: ${getColor('textSupporting')};
`

const activeContainer = css`
  background: ${getHoverVariant('foreground')};
  ${ToggleIconContainer} {
    color: ${getColor('contrast')};
  }
`

const OptionContent = styled(HStack)`
  overflow: hidden;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  > * {
    ${cropText};
  }
`

const Container = styled(SelectContainer)<{
  isActive: boolean
  isDisabled?: boolean
}>`
  ${({ isDisabled }) =>
    isDisabled
      ? css`
          pointer-events: none;
          opacity: 0.4;
        `
      : css`
          ${interactive};

          &:hover {
            ${activeContainer}
          }
        `}

  ${({ isActive }) => isActive && activeContainer}

  outline: 1px solid transparent;
  &:active {
    outline: 1px solid ${getColor('primary')};
  }

  &:focus {
    outline: 1px solid ${getColor('primary')};
  }
`

const Outline = styled.div`
  ${absoluteOutline(0, 0)};
  background: transparent;
  ${borderRadius.s};
  border: 2px solid ${getColor('primary')};
`

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
      <Container
        isDisabled={isDisabled}
        isActive={isOpen}
        {...referenceProps}
        {...rest}
      >
        <OptionContent>
          {openerContent ?? renderOption(value as T)}
        </OptionContent>
        {showToggle && <ToggleIconContainer isOpen={isOpen} />}
      </Container>
      {isOpen && !isDisabled && (
        <FloatingFocusManager context={context} modal returnFocus={returnFocus}>
          <FloatingOptionsContainer {...getFloatingProps()}>
            {options.map((option, index) => (
              <OptionItem
                isActive={activeIndex === index}
                {...getOptionProps({
                  index,
                  onSelect: () => {
                    onChange(option)
                    setIsOpen(false)
                  },
                })}
              >
                <OptionContent key={getOptionKey(option)}>
                  {renderOption(option)}
                </OptionContent>
                {option === value && <Outline />}
              </OptionItem>
            ))}
          </FloatingOptionsContainer>
        </FloatingFocusManager>
      )}
    </>
  )
}
