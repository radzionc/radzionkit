import { ComponentWithChildrenProps } from '../props'
import FocusTrapReact from 'focus-trap-react'

export const FocusTrap = ({ children }: ComponentWithChildrenProps) => {
  return (
    <FocusTrapReact
      focusTrapOptions={{
        allowOutsideClick: true,
        escapeDeactivates: false,
      }}
    >
      {children}
    </FocusTrapReact>
  )
}
