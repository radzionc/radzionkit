import { Button } from '../../buttons/Button'
import { HStack } from '@lib/ui/css/stack'

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
          <Button isDisabled={isDisabled} onClick={onCancel} kind="secondary">
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
