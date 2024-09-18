import { preventDefault } from '../../utils/preventDefault'
import { FormEvent, KeyboardEvent } from 'react'
import { stopPropagation } from '../../utils/stopPropagation'
import { withoutUndefinedFields } from '@lib/utils/record/withoutUndefinedFields'

type GetFormPropsInput = {
  onClose?: () => void
  onSubmit?: () => void
  isDisabled?: boolean | string
}

export const getFormProps = ({
  onClose,
  onSubmit,
  isDisabled = false,
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
            if (isDisabled) return

            onSubmit()
          }),
        )
      : undefined,
  })
}
