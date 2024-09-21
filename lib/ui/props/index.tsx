import { ElementType, ReactNode } from 'react'
import { HSLA } from '../colors/HSLA'
import { Point } from '../entities/Point'

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

export type NoValueFinishProps = {
  onFinish: () => void
}

export type OptionalValueFinishProps<T> = {
  onFinish: (value?: T) => void
}

export type ValueFinishProps<T> = {
  onFinish: (value: T) => void
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
  isActive?: boolean
}

export type ComponentWithSelectedState = {
  isSelected: boolean
}

export type ComponentWithDisabledState = {
  isDisabled?: boolean | string
}

export type ComponentWithIndexProps = {
  index: number
}

export type RemovableComponentProps = {
  onRemove: () => void
}

export type AsElementComponent<T extends ElementType = ElementType> = {
  as?: T
}

export type DraggingAwareComponentProps = {
  isDragging?: boolean
}

export type ProgressComponentProps = {
  target: number
  current: number
}

export type PositionedComponentProps = {
  position: Point
}
