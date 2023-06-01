import { ReactNode } from 'react'

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
