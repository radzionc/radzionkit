import { ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { UniformColumnGrid } from '../../css/uniformColumnGrid'

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
  <UniformColumnGrid gap={20}>
    <Button type="button" kind="secondary" size="l" onClick={onCancel}>
      Cancel
    </Button>
    <Button onClick={onSubmit} isDisabled={isDisabled} size="l">
      {submitText}
    </Button>
  </UniformColumnGrid>
)
