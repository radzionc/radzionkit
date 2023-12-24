import { ComponentProps, forwardRef, useId } from 'react'
import { DropdownOption } from '../DropdownOption'

export const FixedOptionsInputItem = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DropdownOption>
>(({ children, ...rest }, ref) => {
  const id = useId()

  return (
    <DropdownOption
      ref={ref}
      role="option"
      id={id}
      aria-selected={rest.isActive}
      {...rest}
    >
      {children}
    </DropdownOption>
  )
})
