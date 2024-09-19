import { Modal, ModalProps } from '.'
import { ButtonKind, Button } from '../buttons/Button'
import { UniformColumnGrid } from '../css/uniformColumnGrid'
import { TitledComponentProps } from '../props'

type ConfirmationModalProps = Omit<ModalProps, 'footer' | 'onClose'> &
  TitledComponentProps & {
    onClose: () => void
    onConfirm: () => void
    confirmActionText: string
    confirmActionKind?: ButtonKind
  }

export const ConfirmationModal = ({
  onClose,
  onConfirm,
  confirmActionText,
  confirmActionKind = 'alert',
  ...props
}: ConfirmationModalProps) => {
  return (
    <Modal
      {...props}
      onClose={onClose}
      footer={
        <UniformColumnGrid gap={20}>
          <Button size="l" onClick={onClose} kind="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            size="l"
            kind={confirmActionKind}
          >
            {confirmActionText}
          </Button>
        </UniformColumnGrid>
      }
    />
  )
}
