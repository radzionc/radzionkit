import { HStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import styled, { css } from 'styled-components'
import { round } from '@lib/ui/css/round'
import { getColor, matchColor } from '@lib/ui/theme/getters'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { transition } from '@lib/ui/css/transition'
import { interactive } from '@lib/ui/css/interactive'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { CheckIcon } from '@lib/ui/icons/CheckIcon'
import { centerContent } from '@lib/ui/css/centerContent'

const Container = styled(HStack)<{ isCurrent: boolean; isEnabled: boolean }>`
  color: ${matchColor('isCurrent', {
    true: 'contrast',
    false: 'textSupporting',
  })};

  align-items: center;
  gap: 8px;
  ${verticalPadding(8)}
  ${transition};

  ${({ isEnabled }) => isEnabled && interactive};
  ${({ isCurrent, isEnabled }) =>
    isEnabled &&
    !isCurrent &&
    css`
      &:hover {
        color: ${getColor('text')};
      }
    `}
`

const CheckContainer = styled.div<{ isCompleted: boolean }>`
  ${round};
  ${centerContent};
  background: ${getColor('mistExtra')};

  ${sameDimensions(24)};

  color: ${matchColor('isCompleted', {
    true: 'success',
    false: 'transparent',
  })};
  font-size: 14px;
`

type FlowNavigationItemProps = {
  isCurrent: boolean
  isCompleted: boolean
  isEnabled: boolean
  onClick: () => void
  name: string
}

export const FlowNavigationItem = ({
  isCurrent,
  isCompleted,
  isEnabled,
  onClick,
  name,
}: FlowNavigationItemProps) => {
  return (
    <Container
      isCurrent={isCurrent}
      onClick={isEnabled ? () => onClick() : undefined}
      isEnabled={isEnabled}
    >
      <CheckContainer isCompleted={isCompleted}>
        <IconWrapper>
          <CheckIcon />
        </IconWrapper>
      </CheckContainer>
      <Text weight="semibold">{name}</Text>
    </Container>
  )
}
