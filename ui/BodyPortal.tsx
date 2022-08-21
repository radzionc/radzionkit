import { createPortal } from "react-dom";
import { ComponentWithChildrenProps } from "shared/props";
import { useBody } from "./hooks/useBody";

export function BodyPortal({ children }: ComponentWithChildrenProps) {
  const body = useBody();

  if (!body) return null;

  return createPortal(children, body);
}
