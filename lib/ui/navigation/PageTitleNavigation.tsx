import styled, { css } from 'styled-components'
import { transition } from '@lib/ui/css/transition'
import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { HStackSeparatedBy } from '@lib/ui/layout/StackSeparatedBy'
import { Text } from '@lib/ui/text'
import { InputProps } from '../props'

const ViewOption = styled(UnstyledButton)<{ isSelected: boolean }>`
  color: ${({ isSelected, theme }) =>
    (isSelected ? theme.colors.text : theme.colors.textShy).toCssValue()};

  ${transition}

  ${({ isSelected, theme }) =>
    !isSelected &&
    css`
      &:hover {
        color: ${theme.colors.textSupporting.toCssValue()};
      }
    `}
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
  return (
    <HStackSeparatedBy separator={<Text color="shy">|</Text>}>
      {options.map((v) => (
        <ViewOption
          onClick={() => onChange(v)}
          isSelected={v === value}
          key={value}
        >
          {getOptionName(v)}
        </ViewOption>
      ))}
    </HStackSeparatedBy>
  )
}
