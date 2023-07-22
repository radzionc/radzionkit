import { ReactNode, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { inputBorderRadiusCSS } from '../config'
import { useKeyPress } from '../../../shared/hooks/useKeyPress'
import { getColor } from '../../theme/getters'

interface Props<T> {
  options: T[]
  renderOption: (option: T) => ReactNode
  optionToKey: (option: T) => string
  onOptionHighlight: (index: number) => void
  onOptionSelect: (option: T) => void
  highlightedIndex: number | null
}

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) =>
    theme.name === 'light'
      ? theme.colors.background.toCssValue()
      : theme.colors.foreground.toCssValue()};
  box-shadow: ${({ theme }) => theme.shadows.small};
  ${inputBorderRadiusCSS};
  overflow: hidden;
  max-height: 280px;
  overflow-y: auto;
  padding: 4px;
`

export const Option = styled.div<{ isHighlighted: boolean }>`
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;

  color: ${getColor('text')};

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: ${getColor('mist')};
    `}
`

export function ComboboxOptions<T>({
  options,
  highlightedIndex,
  renderOption,
  optionToKey,
  onOptionSelect,
  onOptionHighlight,
}: Props<T>) {
  const optionsRefs = useRef<HTMLDivElement[]>([])

  const getHandleStep = (step: number) => () => {
    const adjustedIndex = (highlightedIndex || 0) + step
    const newIndex =
      adjustedIndex < 0
        ? options.length + adjustedIndex
        : adjustedIndex % options.length

    onOptionHighlight(newIndex)

    const element = optionsRefs.current[newIndex]
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  useEffect(() => {
    if (highlightedIndex === null || highlightedIndex >= options.length) {
      onOptionHighlight(0)
    }
  }, [highlightedIndex, onOptionHighlight, options.length])

  useKeyPress('ArrowUp', getHandleStep(-1))

  useKeyPress('ArrowDown', getHandleStep(1))

  return (
    <Container>
      {options.map((option, index) => (
        <Option
          ref={(element) => {
            if (element) {
              optionsRefs.current[index] = element
            }
          }}
          onMouseUp={() => {
            onOptionSelect(option)
          }}
          onTouchEnd={() => {
            onOptionSelect(option)
          }}
          onMouseEnter={() => onOptionHighlight(index)}
          key={optionToKey(option)}
          isHighlighted={index === highlightedIndex}
        >
          {renderOption(option)}
        </Option>
      ))}
    </Container>
  )
}
