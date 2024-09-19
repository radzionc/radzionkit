import { Button } from '../../buttons/Button'
import { IconWrapper } from '../../icons/IconWrapper'
import { PlusIcon } from '../../icons/PlusIcon'
import { HStack } from '@lib/ui/css/stack'
import {
  ClickableComponentProps,
  ComponentWithChildrenProps,
} from '../../props'

export const FieldArrayAddButton = ({
  onClick,
  children,
}: ComponentWithChildrenProps & ClickableComponentProps) => (
  <Button onClick={onClick} style={{ alignSelf: 'start' }} kind="secondary">
    <HStack alignItems="center" gap={8}>
      <IconWrapper>
        <PlusIcon />
      </IconWrapper>
      {children}
    </HStack>
  </Button>
)
