import { VStack } from '@lib/ui/css/stack'
import { FormEvent } from 'react'

import { Fields } from '../../inputs/Fields'
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
      <Fields>{content}</Fields>
      {actions}
    </VStack>
  )
}
