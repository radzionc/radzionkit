import { Modal, ModalProps } from '.'
import { SameWidthChildrenRow } from '../Layout/SameWidthChildrenRow'
import { Button, ButtonKind } from '../buttons/Button'

interface ConfirmationModalProps
  extends Omit<ModalProps, 'footer' | 'onClose'> {
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
        <SameWidthChildrenRow gap={20}>
          <Button size="l" onClick={onClose} kind="secondary">
            Cancel
          </Button>
          <Button
            size="l"
            onClick={() => {
              onConfirm()
              onClose()
            }}
            kind={confirmActionKind}
          >
            {confirmActionText}
          </Button>
        </SameWidthChildrenRow>
      }
    />
  )
}
