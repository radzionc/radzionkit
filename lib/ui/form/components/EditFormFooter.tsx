import { Button } from '../../buttons/Button'
import { HStack } from '../../layout/Stack'

type EditFormFooterProps = {
  onCancel?: () => void
  isDisabled?: string | boolean
}

export const EditFormFooter = ({
  onCancel,
  isDisabled,
}: EditFormFooterProps) => {
  return (
    <HStack
      wrap="wrap"
      justifyContent="flex-end"
      fullWidth
      alignItems="center"
      gap={20}
    >
      <HStack alignItems="center" gap={8}>
        {onCancel && (
          <Button
            type="button"
            isDisabled={isDisabled}
            onClick={onCancel}
            kind="secondary"
          >
            Cancel
          </Button>
        )}
        <Button isDisabled={isDisabled}>Save</Button>
      </HStack>
    </HStack>
  )
}
