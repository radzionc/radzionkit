import { Button } from '../../buttons/Button'
import { UniformColumnGrid } from '../../layout/UniformColumnGrid'

type FormActionsProps = {
  isDisabled: boolean | string | undefined
  onCancel: () => void
  onSubmit?: () => void
}

export const FormActions = ({
  isDisabled,
  onCancel,
  onSubmit,
}: FormActionsProps) => (
  <UniformColumnGrid gap={20}>
    <Button type="button" kind="secondary" size="l" onClick={onCancel}>
      Cancel
    </Button>
    <Button onClick={onSubmit} isDisabled={isDisabled} size="l">
      Create
    </Button>
  </UniformColumnGrid>
)
