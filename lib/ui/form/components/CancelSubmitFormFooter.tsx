import { HStack } from '@lib/ui/css/stack'

import { Button } from '../../buttons/Button'

type CancelSubmitFormFooterProps = {
  onCancel?: () => void
  isDisabled?: string | boolean
  isLoading?: boolean
  submitText?: string
  cancelText?: string
}

export const CancelSubmitFormFooter = ({
  onCancel,
  isDisabled,
  isLoading,
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
      <Button type="submit" isLoading={isLoading} isDisabled={isDisabled}>
        {submitText}
      </Button>
    </HStack>
  )
}
