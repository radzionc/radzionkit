import { Modal, ModalProps } from '.'
import { SameWidthChildrenRow } from '../Layout/SameWidthChildrenRow'
import { PrimaryButton, PrimaryButtonKind } from '../buttons/rect/PrimaryButton'

interface ConfirmationModalProps
  extends Omit<ModalProps, 'footer' | 'onClose'> {
  onClose: () => void
  onConfirm: () => void
  confirmActionText: string
  confirmActionKind?: PrimaryButtonKind
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
          <PrimaryButton size="l" onClick={onClose} kind="secondary">
            Cancel
          </PrimaryButton>
          <PrimaryButton
            size="l"
            onClick={() => {
              onConfirm()
              onClose()
            }}
            kind={confirmActionKind}
          >
            {confirmActionText}
          </PrimaryButton>
        </SameWidthChildrenRow>
      }
    />
  )
}
