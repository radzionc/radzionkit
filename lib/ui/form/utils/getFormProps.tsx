import { preventDefault } from '../../utils/preventDefault'
import { KeyboardEvent } from 'react'

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
            onClose()
          }
        }
      : undefined,
    onSubmit: preventDefault(() => {
      if (isDisabled) return

      onSubmit()
    }),
  }
}
