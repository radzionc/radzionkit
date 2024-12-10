import { ComponentProps, useId } from 'react'
import { DropdownOption } from '../DropdownOption'

export function FixedOptionsInputItem({
  children,
  ...rest
}: ComponentProps<typeof DropdownOption>) {
  const id = useId()

  return (
    <DropdownOption
      role="option"
      id={id}
      aria-selected={rest.isActive}
      {...rest}
    >
      {children}
    </DropdownOption>
  )
}
