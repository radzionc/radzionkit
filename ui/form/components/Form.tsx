import { FormEvent } from 'react'
import { VStack } from '../../layout/Stack'
import { preventDefault } from '../../utils/preventDefault'

interface Props {
  onSubmit: () => void
  content: React.ReactNode
  actions: React.ReactNode
  gap?: number
}

export const Form = ({ content, actions, onSubmit, gap = 28 }: Props) => {
  return (
    <VStack
      gap={gap}
      as="form"
      fullWidth
      onSubmit={preventDefault<FormEvent<HTMLFormElement>>(onSubmit)}
    >
      <VStack fullWidth gap={8}>
        {content}
      </VStack>
      {actions}
    </VStack>
  )
}
