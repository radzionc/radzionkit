import { ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { HStack } from '../../css/stack'

type FormActionsProps = {
  isDisabled?: boolean | string
  onCancel: () => void
  onSubmit?: () => void
  submitText?: ReactNode
}

export const FormActions = ({
  isDisabled = false,
  onCancel,
  onSubmit,
  submitText = 'Submit',
}: FormActionsProps) => (
  <HStack fullWidth alignItems="center" justifyContent="end" gap={12}>
    <Button type="button" kind="secondary" onClick={onCancel}>
      Cancel
    </Button>
    <Button onClick={onSubmit} isDisabled={isDisabled}>
      {submitText}
    </Button>
  </HStack>
)
