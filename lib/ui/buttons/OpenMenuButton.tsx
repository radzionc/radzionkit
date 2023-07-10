import { MoreHorizontalIcon } from "lib/ui/icons/MoreHorizontalIcon"
import { ComponentProps, Ref, forwardRef } from "react"
import { IconButton } from "./IconButton"

export const OpenMenuButton = forwardRef(function OpenMenuButton(
  props: Omit<ComponentProps<typeof IconButton>, "icon">,
  ref: Ref<HTMLButtonElement> | null
) {
  return <IconButton ref={ref} {...props} icon={<MoreHorizontalIcon />} />
})
