import { borderRadius } from '@lib/ui/css/borderRadius'
import { interactive } from '@lib/ui/css/interactive'
import { HStack, vStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { InvisibleHTMLCheckbox } from '@lib/ui/inputs/InvisibleHTMLCheckbox'
import { SwitchContainer } from '@lib/ui/inputs/Switch/SwitchContainer'
import { SwitchControl } from '@lib/ui/inputs/Switch/SwitchControl'
import { useRequestNotificationPermissionMutation } from '@lib/ui/notifications/hooks/useRequestNotificationPermissionMutation'
import { IsActiveProp, InputProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { getColor, matchColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'

const config = {
  horizontalPadding: 8,
  borderWidth: 1,
}

const Title = styled(Text)`
  font-size: 16px;
`

const Wrapper = styled.label<IsActiveProp>`
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
