import { PrimaryButton, Props as PrimaryButtonProps } from './PrimaryButton'

interface Props
  extends Pick<PrimaryButtonProps, 'isLoading' | 'onClick' | 'isDisabled'> {
  text?: string
}

export const SubmitFormButton = ({ text = 'Submit', ...props }: Props) => {
  return (
    <PrimaryButton size="l" {...props}>
      {text}
    </PrimaryButton>
  )
}
