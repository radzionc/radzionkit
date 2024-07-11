import { ReactNode } from 'react'
import { HSLA } from '../colors/HSLA'

export type ClosableComponentProps = {
  onClose: () => void
}

export type ComponentWithIconProps = {
  icon: ReactNode
}

export type ComponentWithChildrenProps = {
  children: ReactNode
}

export type ComponentWithBackActionProps = {
  onBack: () => void
}

export type ComponentWithClassNameProps = {
  className?: string
}

export type ClickableComponentProps = {
  onClick: () => void
}

export type FinishableComponentProps = {
  onFinish: () => void
}

export type InputProps<T> = {
  value: T
  onChange: (value: T) => void
}

export type ComponentWithErrorProps = {
  error?: string
}

export type TitledComponentProps = {
  title: ReactNode
}

export type StyledComponentWithColorProps = {
  $color: HSLA
}

export type SelectableComponentProps<T> = {
  onSelect: (value: T) => void
}

export type UIComponentProps = {
  style?: React.CSSProperties
  className?: string
}

export type LabeledComponentProps = {
  label: ReactNode
}

export type PromptProps = {
  onSuccess: () => void
  onCancel: () => void
}

export type ComponentWithValueProps<T> = {
  value: T
}

export type ActionGuardProps<T = () => void | Promise<void>> = {
  action: T
  render: (params: { action: T }) => ReactNode
}

export type ComponentWithWidthProps = {
  width: number
}

export type ComponentWithActiveState = {
  isActive: boolean
}

export type ComponentWithDisabledState = {
  isDisabled?: boolean | string
}
