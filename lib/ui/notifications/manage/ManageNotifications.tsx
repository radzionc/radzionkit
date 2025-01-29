import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { WithSecondaryAction } from '@lib/ui/buttons/WithSecondaryAction'
import { HStack } from '@lib/ui/css/stack'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { SettingsIcon } from '@lib/ui/icons/SettingsIcon'
import { Modal } from '@lib/ui/modal'
import { useState } from 'react'
import { NoVolumeIcon } from '@lib/ui/icons/NoVolumeIcon'
import { VolumeIcon } from '@lib/ui/icons/VolumeIcon'
import styled from 'styled-components'
import { ModalContent } from '@lib/ui/modal/ModalContent'
import { ChildrenProp, TitleProp } from '../../props'

const IconContainer = styled(IconWrapper)`
  color: ${({ theme }) =>
    theme.colors.foreground.getVariant({ l: () => 48 }).toCssValue()};
`

type ManageNotificationsProps = {
  isSoundEnabled: boolean
  setIsSoundEnabled: (isSoundEnabled: boolean) => void
} & ChildrenProp &
  TitleProp &
  React.ComponentProps<typeof WithSecondaryAction>

export const ManageNotifications = ({
  isSoundEnabled,
  setIsSoundEnabled,
  children,
  title,
  ...rest
}: ManageNotificationsProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <WithSecondaryAction {...rest}>
        <HStack onClick={() => setIsOpen(!isOpen)} alignItems="center" gap={8}>
          <IconContainer>
            <SettingsIcon />
          </IconContainer>
          Notifications
        </HStack>
        <UnstyledButton
          title={isSoundEnabled ? 'Disable sound' : 'Enable sound'}
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
        >
          {isSoundEnabled ? <VolumeIcon /> : <NoVolumeIcon />}
        </UnstyledButton>
      </WithSecondaryAction>
      {isOpen && (
        <Modal
          width={440}
          placement="top"
          onClose={() => setIsOpen(false)}
          title={title}
        >
          <ModalContent>{children}</ModalContent>
        </Modal>
      )}
    </>
  )
}
