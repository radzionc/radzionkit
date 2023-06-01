import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { defaultTransitionCSS } from 'lib/ui/animations/transitions'
import { CheckIcon } from 'lib/ui/icons/CheckIcon'
import { HStack } from 'lib/ui/Stack'
import { Text } from 'lib/ui/Text'
import { centerContentCSS } from 'lib/ui/utils/centerContentCSS'
import { getSameDimensionsCSS } from 'lib/ui/utils/getSameDimensionsCSS'

import {
  InvisibleHTMLCheckbox,
  InvisibleHTMLCheckboxProps,
} from './InvisibleHTMLCheckbox'

interface CheckboxProps extends InvisibleHTMLCheckboxProps {
  label?: ReactNode
  className?: string
}

const Box = styled.div<{ isChecked: boolean }>`
  ${getSameDimensionsCSS(28)}
  ${centerContentCSS};
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.text.toCssValue()};
  color: ${({ theme }) => theme.colors.background.toCssValue()};

  ${defaultTransitionCSS}

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: ${({ theme }) => theme.colors.text.toCssValue()};
    `};
`

const Container = styled(HStack)`
  color: ${({ theme }) => theme.colors.textSupporting.toCssValue()};

  cursor: pointer;

  ${defaultTransitionCSS}

  :hover {
    color: ${({ theme }) => theme.colors.text.toCssValue()};
  }

  font-weight: 500;

  :hover ${Box} {
    transform: scale(1.1);
  }
`

export const Checkbox = ({
  value,
  onChange,
  label,
  className,
}: CheckboxProps) => (
  <Container className={className} as="label" alignItems="center" gap={12}>
    <Box isChecked={value}>{value && <CheckIcon />}</Box>
    {label && (
      <Text style={{ transition: 'none' }} as="div">
        {label}
      </Text>
    )}
    <InvisibleHTMLCheckbox value={value} onChange={onChange} />
  </Container>
)
