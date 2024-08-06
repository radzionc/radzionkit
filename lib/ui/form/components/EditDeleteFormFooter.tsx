import { Button } from '../../buttons/Button'
import { HStack } from '../../layout/Stack'

type EditDeleteFormFooterProps = {
  onDelete?: () => void
  onCancel?: () => void
  isDisabled?: string | boolean
}

export const EditDeleteFormFooter = ({
  onCancel,
  onDelete,
  isDisabled,
}: EditDeleteFormFooterProps) => {
  return (
    <HStack
      wrap="wrap"
      justifyContent="space-between"
      fullWidth
      alignItems="center"
      gap={20}
    >
      {onDelete ? (
        <Button kind="alert" type="button" onClick={onDelete}>
          Delete
        </Button>
      ) : (
        <div />
      )}
      <HStack alignItems="center" gap={8}>
        {onCancel && (
          <Button type="button" onClick={onCancel} kind="secondary">
            Cancel
          </Button>
        )}
        <Button isDisabled={isDisabled}>Save</Button>
      </HStack>
    </HStack>
  )
}
