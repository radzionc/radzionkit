import { ComponentWithChildrenProps, NoValueFinishProps } from '@lib/ui/props'
import { BodyPortal } from '@lib/ui/dom/BodyPortal'
import { FocusTrap } from '@lib/ui/modal/FocusTrap'
import styled from 'styled-components'
import { ModalContainer } from '@lib/ui/modal/ModalContainer'
import { Backdrop } from './Backdrop'

const Container = styled(ModalContainer)`
  > * {
    border-radius: 0;
    border: none;
  }
`

type PanelModalProps = NoValueFinishProps &
  ComponentWithChildrenProps & {
    width?: number
  }

export const PanelModal = ({
  onFinish,
  children,
  width = 560,
}: PanelModalProps) => {
  return (
    <BodyPortal>
      <Backdrop onClose={() => onFinish()}>
        <FocusTrap>
          <Container placement="top" targetWidth={width}>
            {children}
          </Container>
        </FocusTrap>
      </Backdrop>
    </BodyPortal>
  )
}
