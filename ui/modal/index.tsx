import { ReactNode } from 'react'
import {
  ClosableComponentProps,
  ComponentWithChildrenProps,
  TitledComponentProps,
} from '../props'
import { BodyPortal } from '../ui/BodyPortal'
import { CompleteMist } from './CompleteMist'
import { useIsScreenWidthLessThan } from '../hooks/useIsScreenWidthLessThan'
import { useKey } from 'react-use'
import { FocusTrap } from './FocusTrap'
import { ModalContainer, ModalPlacement } from './ModalContainer'
import { HStack, VStack } from '../ui/Stack'
import { ModalTitleText } from './ModalTitleText'
import { ModalContent } from './ModalContent'
import { ModalCloseButton } from './ModalCloseButton'
import { stopPropagation } from '../utils/stopPropagation'
import { ModalSubTitleText } from './ModalSubTitleText'

export type ModalProps = TitledComponentProps &
  ComponentWithChildrenProps &
  ClosableComponentProps & {
    subTitle?: ReactNode
    placement?: ModalPlacement
    footer?: ReactNode
    width?: number
  }

const minHorizontalFreeSpaceForMist = 120

export const Modal = ({
  title,
  children,
  onClose,
  placement = 'center',
  footer,
  width = 400,
  subTitle,
}: ModalProps) => {
  const isFullScreen = useIsScreenWidthLessThan(
    width + minHorizontalFreeSpaceForMist,
  )

  useKey('Escape', onClose)

  return (
    <BodyPortal>
      <CompleteMist onClick={onClose}>
        <FocusTrap>
          <ModalContainer
            onClick={stopPropagation()}
            placement={placement}
            width={isFullScreen ? undefined : width}
          >
            <VStack gap={8}>
              <HStack
                alignItems="start"
                justifyContent="space-between"
                gap={16}
              >
                <ModalTitleText>{title}</ModalTitleText>
                <ModalCloseButton onClick={onClose} />
              </HStack>
              {subTitle && <ModalSubTitleText>{subTitle}</ModalSubTitleText>}
            </VStack>
            <ModalContent>{children}</ModalContent>
            {footer && <VStack>{footer}</VStack>}
          </ModalContainer>
        </FocusTrap>
      </CompleteMist>
    </BodyPortal>
  )
}
