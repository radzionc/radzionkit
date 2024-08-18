import styled from 'styled-components'
import { ComponentWithChildrenProps, UIComponentProps } from '../props'
import { getColor } from '../theme/getters'
import { borderRadius } from '../css/borderRadius'
import { HStack } from '../layout/Stack'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { transition } from '../css/transition'
import { CloseIcon } from '../icons/CloseIcon'
import { centerContent } from '../css/centerContent'

type IncludedItemProps = ComponentWithChildrenProps &
  UIComponentProps & {
    onRemove?: () => void
  }

const Container = styled(HStack)`
  background: ${getColor('foreground')};
  ${borderRadius.s}
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  padding-left: 12px;
  min-height: 48px;
  gap: 8px;
`

const Button = styled(UnstyledButton)`
  height: 100%;
  min-width: 32px;
  aspect-ratio: 1/1;
  ${borderRadius.s}
  ${transition};
  ${centerContent};
  font-size: 18px;
  flex-shrink: 0;
  &:hover {
    background: ${getColor('mist')};
    color: ${getColor('contrast')};
  }
`

export const IncludedItem = ({
  children,
  onRemove,
  ...rest
}: IncludedItemProps) => {
  return (
    <Container {...rest}>
      {children}
      {onRemove && (
        <Button onClick={onRemove}>
          <CloseIcon />
        </Button>
      )}
    </Container>
  )
}
