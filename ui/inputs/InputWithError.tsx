import { VStack } from '../layout/Stack'
import { ComponentWithChildrenProps } from '../props'
import { InputErrorText } from './InputErrorText'

interface InputWithErrorProps extends ComponentWithChildrenProps {
  error?: string
}

export const InputWithError = ({ children, error }: InputWithErrorProps) => {
  return (
    <VStack gap={4}>
      {children}
      <InputErrorText>{error}</InputErrorText>
    </VStack>
  )
}
