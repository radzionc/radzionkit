import { HStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import styled, { css } from 'styled-components'
import { round } from '@lib/ui/css/round'
import { getColor, matchColor } from '@lib/ui/theme/getters'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { interactive } from '@lib/ui/css/interactive'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { CheckIcon } from '@lib/ui/icons/CheckIcon'
import { centerContent } from '@lib/ui/css/centerContent'
import { IsActiveProp, UiProps } from '../props'

const Container = styled(HStack)<{ isActive: boolean; isEnabled: boolean }>`
  color: ${matchColor('isActive', {
    true: 'contrast',
    false: 'textSupporting',
  })};

  align-items: center;
  gap: 8px;
  ${verticalPadding(8)}

  ${({ isEnabled }) => isEnabled && interactive};
  ${({ isActive, isEnabled }) =>
    isEnabled &&
    !isActive &&
    css`
      &:hover {
        color: ${getColor('text')};
      }
    `}
`

const CheckContainer = styled.div<{ isCompleted: boolean; isActive: boolean }>`
  ${round};
  ${centerContent};
  background: ${getColor('mistExtra')};

  ${sameDimensions(24)};

  color: ${matchColor('isCompleted', {
    true: 'success',
    false: 'transparent',
  })};
  border: 1px solid;
  border-color: ${matchColor('isActive', {
    true: 'textShy',
    false: 'transparent',
  })};
  font-size: 14px;
`

type FlowNavigationItemProps = IsActiveProp &
  UiProps & {
    isCompleted: boolean
    isEnabled: boolean
    onClick: () => void
    name: string
  }

export const FlowNavigationItem = ({
  isActive,
  isCompleted,
  isEnabled,
  onClick,
  name,
  ...rest
}: FlowNavigationItemProps) => {
  return (
    <Container
      isActive={!!isActive}
      onClick={isEnabled ? () => onClick() : undefined}
      isEnabled={isEnabled}
      {...rest}
    >
      <CheckContainer isCompleted={isCompleted} isActive={!!isActive}>
        <IconWrapper>
          <CheckIcon />
        </IconWrapper>
      </CheckContainer>
      <Text weight="500">{name}</Text>
    </Container>
  )
}
