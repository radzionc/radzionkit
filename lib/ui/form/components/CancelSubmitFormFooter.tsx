import { Button } from '../../buttons/Button'
import { HStack } from '@lib/ui/css/stack'

type CancelSubmitFormFooterProps = {
  onCancel?: () => void
  isDisabled?: string | boolean
  isPending?: boolean
  submitText?: string
  cancelText?: string
}

export const CancelSubmitFormFooter = ({
  onCancel,
  isDisabled,
  isPending,
  submitText = 'Submit',
  cancelText = 'Cancel',
}: CancelSubmitFormFooterProps) => {
  return (
    <HStack justifyContent="end" gap={8}>
      {onCancel && (
        <Button onClick={onCancel} kind="secondary">
          {cancelText}
        </Button>
      )}
      <Button type="submit" isLoading={isPending} isDisabled={isDisabled}>
        {submitText}
      </Button>
    </HStack>
  )
}
