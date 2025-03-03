import { HStack } from '@lib/ui/css/stack'

import { Button } from '../../buttons/Button'

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
        <Button kind="alert" onClick={onDelete}>
          Delete
        </Button>
      ) : (
        <div />
      )}
      <HStack alignItems="center" gap={8}>
        {onCancel && (
          <Button onClick={onCancel} kind="secondary">
            Cancel
          </Button>
        )}
        <Button type="submit" isDisabled={isDisabled}>
          Save
        </Button>
      </HStack>
    </HStack>
  )
}
