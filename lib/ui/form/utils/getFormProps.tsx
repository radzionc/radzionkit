import { preventDefault } from '../../utils/preventDefault'
import { FormEvent, KeyboardEvent } from 'react'
import { stopPropagation } from '../../utils/stopPropagation'

type GetFormPropsInput = {
  onClose?: () => void
  onSubmit: () => void
  isDisabled?: boolean | string
}

export const getFormProps = ({
  onClose,
  onSubmit,
  isDisabled = false,
}: GetFormPropsInput) => {
  return {
    onKeyDown: onClose
      ? (event: KeyboardEvent<HTMLFormElement>) => {
          if (event.key === 'Escape') {
            event.stopPropagation()
            onClose()
          }
        }
      : undefined,
    onSubmit: stopPropagation<FormEvent>(
      preventDefault(() => {
        if (isDisabled) return

        onSubmit()
      }),
    ),
  }
}
