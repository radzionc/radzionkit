import { Button } from '../../buttons/Button'
import { HStack } from '../../layout/Stack'

type CreateFormFooterProps = {
  onCancel: () => void
  isDisabled?: string | boolean
}

export const CreateFormFooter = ({
  onCancel,
  isDisabled,
}: CreateFormFooterProps) => {
  return (
    <HStack justifyContent="end" gap={8}>
      <Button type="button" onClick={onCancel} kind="secondary">
        Cancel
      </Button>
      <Button isDisabled={isDisabled}>Submit</Button>
    </HStack>
  )
}
