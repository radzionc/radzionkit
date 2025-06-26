import { withoutUndefinedFields } from '@lib/utils/record/withoutUndefinedFields'
import { FormEvent, KeyboardEvent } from 'react'

import { preventDefault } from '../../utils/preventDefault'
import { stopPropagation } from '../../utils/stopPropagation'

type GetFormPropsInput = {
  onClose?: () => void
  onSubmit?: () => void
  isDisabled?: boolean | string
  isLoading?: boolean
}

export const getFormProps = ({
  onClose,
  onSubmit,
  isDisabled = false,
  isLoading = false,
}: GetFormPropsInput) => {
  return withoutUndefinedFields({
    onKeyDown: onClose
      ? (event: KeyboardEvent<HTMLFormElement>) => {
          if (event.key === 'Escape') {
            event.stopPropagation()
            onClose()
          }
        }
      : undefined,
    onSubmit: onSubmit
      ? stopPropagation<FormEvent>(
          preventDefault(() => {
            if (isDisabled || isLoading) return

            onSubmit()
          }),
        )
      : undefined,
  })
}
