import { useForm } from 'react-hook-form'
import { useKey } from 'react-use'
import styled from 'styled-components'
import { ChecklistItemFrame } from './ChecklistItemFrame'
import { getColor } from '../theme/getters'
import { CheckStatus } from './CheckStatus'

interface ChecklistItemFormShape {
  name: string
}

const Input = styled.input`
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  color: ${getColor('text')};
  outline: none;

  &::placeholder {
    color: ${getColor('textShy')};
  }
`

interface ChecklistItemFormProps {
  onSubmit: (value: ChecklistItemFormShape) => void
  onCancel: () => void
  namePlaceholder?: string
}

export const ChecklistItemForm = ({
  onSubmit,
  onCancel,
  namePlaceholder = 'Name',
}: ChecklistItemFormProps) => {
  const { register, handleSubmit } = useForm<ChecklistItemFormShape>({
    mode: 'all',
    defaultValues: {
      name: '',
    },
  })

  useKey('Escape', onCancel)

  return (
    <ChecklistItemFrame
      as="form"
      style={{ width: '100%' }}
      onBlur={handleSubmit(onSubmit, onCancel)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CheckStatus value={false} />
      <Input
        placeholder={namePlaceholder}
        autoFocus
        {...register('name', { required: true })}
      />
    </ChecklistItemFrame>
  )
}
