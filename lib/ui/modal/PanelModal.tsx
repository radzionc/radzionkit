import { ChildrenProp, OnFinishNoValueProp } from '@lib/ui/props'
import { BodyPortal } from '@lib/ui/dom/BodyPortal'
import styled from 'styled-components'
import { ModalContainer } from '@lib/ui/modal/ModalContainer'
import { Backdrop } from './Backdrop'

const Container = styled(ModalContainer)`
  > * {
    border-radius: 0;
    border: none;
  }
`

type PanelModalProps = OnFinishNoValueProp &
  ChildrenProp & {
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
        <Container placement="top" targetWidth={width}>
          {children}
        </Container>
      </Backdrop>
    </BodyPortal>
  )
}
