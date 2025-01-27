import { ComponentWithActiveState, InputProps } from '@lib/ui/props'
import { HStack, vStack } from '@lib/ui/css/stack'
import styled, { css } from 'styled-components'
import { interactive } from '@lib/ui/css/interactive'
import { getColor, matchColor } from '@lib/ui/theme/getters'
import { SwitchControl } from '@lib/ui/inputs/Switch/SwitchControl'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { SwitchContainer } from '@lib/ui/inputs/Switch/SwitchContainer'
import { InvisibleHTMLCheckbox } from '@lib/ui/inputs/InvisibleHTMLCheckbox'
import { useRequestNotificationPermissionMutation } from '@lib/ui/notifications/hooks/useRequestNotificationPermissionMutation'
import { Text } from '@lib/ui/text'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'

const config = {
  horizontalPadding: 8,
  borderWidth: 1,
}

const Title = styled(Text)`
  font-size: 16px;
`

const Wrapper = styled.label<ComponentWithActiveState>`
  ${interactive};

  ${vStack({
    gap: 12,
  })}

  ${borderRadius.m};
  padding: ${toSizeUnit(config.horizontalPadding)};
  border: ${toSizeUnit(config.borderWidth)} solid
    ${matchColor('isActive', {
      true: 'textPrimary',
      false: 'mist',
    })};

  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover {
        border-color: ${getColor('mistExtra')};
      }
    `}

  &:hover ${Title} {
    color: ${getColor('contrast')};
  }

  &:hover ${SwitchControl} {
    transform: scale(1.08);
  }
`

type DetailedNotificationToggleProps = InputProps<boolean> & {
  name: string
  emoji: string
  description: string
}

export const DetailedNotificationToggle = ({
  name,
  emoji,
  description,
  value,
  onChange,
}: DetailedNotificationToggleProps) => {
  const { mutate: requestPermission } =
    useRequestNotificationPermissionMutation()
  const size = 'm'

  return (
    <Wrapper isActive={value}>
      <InvisibleHTMLCheckbox
        value={value}
        onChange={(isEnabled) => {
          if (!isEnabled) {
            onChange(isEnabled)
          } else {
            requestPermission(undefined, {
              onSuccess: () => onChange(isEnabled),
            })
          }
        }}
      />
      <HStack alignItems="center" gap={8}>
        <SwitchContainer size={size} isActive={value}>
          <SwitchControl isActive={value} size={size} />
        </SwitchContainer>
        <Title size={16}>{name}</Title>
        <Text size={16} color="contrast">
          {emoji}
        </Text>
      </HStack>
      <Text color="supporting" height="l">
        {description}
      </Text>
    </Wrapper>
  )
}
