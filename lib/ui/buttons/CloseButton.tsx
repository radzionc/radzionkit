import { ComponentProps, Ref, forwardRef } from "react"
import { IconButton } from "./IconButton"
import { CloseIcon } from "../icons/CloseIcon"

export const CloseButton = forwardRef(function CloseButton(
  props: Omit<ComponentProps<typeof IconButton>, "icon" | "title">,
  ref: Ref<HTMLButtonElement> | null
) {
  return <IconButton title="Close" ref={ref} {...props} icon={<CloseIcon />} />
})
