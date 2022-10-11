import { RefObject, useRef } from "react";
import { useIntersection } from "react-use";

interface RenderParams<T extends HTMLElement> {
  isIntersecting: boolean;
  ref: RefObject<T>;
}

interface Props<T extends HTMLElement> {
  rootMargin?: string;
  render: (params: RenderParams<T>) => void;
}

export function IntersectionAware<T extends HTMLElement>({
  render,
  rootMargin = "1000px",
}: Props<T>) {
  const ref = useRef<T>(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin,
    threshold: 0,
  });

  return <>{render({ ref, isIntersecting: !!intersection?.isIntersecting })}</>;
}
