import { CloseIcon } from "lib/ui/icons/CloseIcon";

import { Props, StickyIconButton } from "./StickyIconButton";

export const CloseIconButton = (props: Omit<Props, "icon">) => (
  <StickyIconButton kind="secondary" {...props} icon={<CloseIcon />} />
);
