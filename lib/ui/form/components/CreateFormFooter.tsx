import { Button } from '../../buttons/Button'
import { HStack } from '@lib/ui/css/stack'

type CreateFormFooterProps = {
  onCancel?: () => void
  isDisabled?: string | boolean
  isPending?: boolean
}

export const CreateFormFooter = ({
  onCancel,
  isDisabled,
  isPending,
}: CreateFormFooterProps) => {
  return (
    <HStack justifyContent="end" gap={8}>
      {onCancel && (
        <Button onClick={onCancel} kind="secondary">
          Cancel
        </Button>
      )}
      <Button type="submit" isLoading={isPending} isDisabled={isDisabled}>
        Submit
      </Button>
    </HStack>
  )
}
