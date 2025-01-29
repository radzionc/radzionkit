import { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { IsActiveProp, InputProps } from '../props'
import { horizontalPadding } from '../css/horizontalPadding'
import { getColor } from '../theme/getters'
import { absoluteOutline } from '../css/absoluteOutline'
import { HStack } from '@lib/ui/css/stack'
import { centerContent } from '../css/centerContent'
import { hideScrollbars } from '../css/hideScrollbars'

const Underline = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  border-bottom: 2px solid ${getColor('mist')};
`

const ItemUnderline = styled.div`
  ${absoluteOutline(0, 0)};
  border-bottom: 2px solid transparent;
`

const Container = styled(HStack)`
  overflow-x: auto;
  max-width: 100%;
  ${hideScrollbars};
`

const Option = styled(UnstyledButton)<IsActiveProp>`
  flex-shrink: 0;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  height: 100%;
  ${centerContent};
  ${horizontalPadding(12)};
  min-width: 80px;
  ${({ isActive }) =>
    isActive
      ? css`
          ${ItemUnderline} {
            border-color: ${getColor('contrast')};
          }
          color: ${getColor('contrast')};
        `
      : css`
          color: ${getColor('textSupporting')};
          &:hover {
            color: ${getColor('contrast')};
          }
        `};
`

type PageTitleNavigationProps<T extends string> = InputProps<T> & {
  options: readonly T[]
  getOptionName: (option: T) => string
}

export function PageTitleNavigation<T extends string>({
  value,
  getOptionName,
  options,
  onChange,
}: PageTitleNavigationProps<T>) {
  const optionRefs = useRef<Map<T, HTMLButtonElement | null>>(new Map())

  useEffect(() => {
    const activeElement = optionRefs.current.get(value)
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [value])

  return (
    <>
      <Container>
        {options.map((v) => (
          <Option
            onClick={() => onChange(v)}
            isActive={v === value}
            key={v}
            ref={(el) => {
              optionRefs.current.set(v, el)
            }}
          >
            {getOptionName(v)}
            <ItemUnderline />
          </Option>
        ))}
      </Container>
      <Underline />
    </>
  )
}
