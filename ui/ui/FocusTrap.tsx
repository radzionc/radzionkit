import { ComponentWithChildrenProps } from "../shared/props";

// TODO: implement this
// before we were using https://github.com/focus-trap/focus-trap
// but it requires props-types as peer dependency
export const FocusTrap = ({ children }: ComponentWithChildrenProps) => {
  return <>{children}</>
}