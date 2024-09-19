import { ComponentProps, ReactNode } from 'react'
import { AsElementComponent, TitledComponentProps } from '../props'
import { BodyPortal } from '../dom/BodyPortal'
import { ModalContainer, ModalPlacement } from './ModalContainer'
import { HStack, VStack } from '@lib/ui/css/stack'
import { ModalTitleText } from './ModalTitleText'
import { ModalContent } from './ModalContent'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalSubTitleText } from './ModalSubTitleText'
import styled from 'styled-components'
import { toSizeUnit } from '../css/toSizeUnit'
import { Backdrop } from './Backdrop'

export type ModalProps = AsElementComponent &
  Omit<ComponentProps<typeof Container>, 'title'> &
  TitledComponentProps & {
    onClose?: () => void
    subTitle?: ReactNode
    placement?: ModalPlacement
    footer?: ReactNode
    targetWidth?: number
  }

const contentVerticalPadding = 8

const Container = styled(ModalContainer)`
  > * {
    padding: 24px;
  }

  > *:nth-child(2) {
    padding-top: ${toSizeUnit(contentVerticalPadding)};
  }

  > *:not(:first-child):not(:last-child) {
    padding-bottom: ${toSizeUnit(contentVerticalPadding)};
  }
`

export const Modal = ({
  title,
  children,
  onClose,
  footer,
  subTitle,
  as,
  ...rest
}: ModalProps) => {
  return (
    <BodyPortal>
      <Backdrop onClose={onClose}>
        <Container forwardedAs={as} {...rest}>
          <VStack gap={8}>
            <HStack alignItems="start" justifyContent="space-between" gap={16}>
              <ModalTitleText>{title}</ModalTitleText>
              {onClose && <ModalCloseButton onClick={onClose} />}
            </HStack>
            {subTitle && <ModalSubTitleText>{subTitle}</ModalSubTitleText>}
          </VStack>
          <ModalContent>{children}</ModalContent>
          {footer && <VStack>{footer}</VStack>}
        </Container>
      </Backdrop>
    </BodyPortal>
  )
}
