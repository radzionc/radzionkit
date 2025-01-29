import { ElementType, ReactNode } from 'react'
import { HSLA } from '../colors/HSLA'
import { Point } from '../entities/Point'

export type OnCloseProp = {
  onClose: () => void
}

export type IconProp = {
  icon: ReactNode
}

export type ChildrenProp = {
  children: ReactNode
}

export type OnBackProp = {
  onBack: () => void
}

export type OnForwardProp = {
  onForward: () => void
}

export type ClassNameProp = {
  className?: string
}

export type OnClickProp = {
  onClick: () => void
}

export type OnFinishNoValueProp = {
  onFinish: () => void
}

export type OnFinishOptionalValueProp<T> = {
  onFinish: (value?: T) => void
}

export type OnFinishValueProp<T> = {
  onFinish: (value: T) => void
}

export type InputProps<T> = {
  value: T
  onChange: (value: T) => void
}

export type ErrorProp = {
  error?: string
}

export type TitleProp = {
  title: ReactNode
}

export type StyledColorProp = {
  $color: HSLA
}

export type OnSelectProp<T> = {
  onSelect: (value: T) => void
}

export type UiProps = {
  style?: React.CSSProperties
  className?: string
}

export type LabelProp = {
  label: ReactNode
}

export type PromptProps = {
  onSuccess: () => void
  onCancel: () => void
}

export type ValueProp<T> = {
  value: T
}

export type InitialValueProp<T> = {
  initialValue: T
}

export type OptionsProp<T> = {
  options: readonly T[]
}

export type ActionGuardProps<T = () => void | Promise<void>> = {
  action: T
  render: (params: { action: T }) => ReactNode
}

export type WidthProp = {
  width: number
}

export type IsActiveProp = {
  isActive?: boolean
}

export type IsSelectedProp = {
  isSelected: boolean
}

export type IsDisabledProp = {
  isDisabled?: boolean | string
}

export type IndexProp = {
  index: number
}

export type OnRemoveProp = {
  onRemove: () => void
}

export type AsProp<T extends ElementType = ElementType> = {
  as?: T
}

export type IsDraggingProp = {
  isDragging?: boolean
}

export type ProgressProps = {
  target: number
  current: number
}

export type PositionProp = {
  position: Point
}

export type ColorProp = {
  color: HSLA
}

export type ActionProp = {
  action: ReactNode
}

export type OnSubmitProp = {
  onSubmit: () => void
}

export type ItemsProp<T> = {
  items: T[]
}

export type SizeProp<T = number> = {
  size: T
}

export type StatusProp<T> = {
  status: T
}

export type NameProp = {
  name: string
}

export type KindProp<T> = {
  kind: T
}
