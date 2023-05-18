import { pick } from "lib/shared/utils/pick";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "react-use";

export interface ElementSize {
  width: number;
  height: number;
}

const toElementSize = (rect: DOMRect): ElementSize =>
  pick(rect, ["height", "width"]);

const areEqualSizes = (one: ElementSize, another: ElementSize) =>
  one.width === another.width && one.height === another.height;

export const useElementSize = (element: HTMLElement | null) => {
  const [size, setSize] = useState<ElementSize | null>(() =>
    element ? toElementSize(element.getBoundingClientRect()) : null
  );

  useIsomorphicLayoutEffect(() => {
    if (!element) return;

    const handleElementChange = () => {
      const newSize = toElementSize(element.getBoundingClientRect());

      if (size && areEqualSizes(newSize, size)) return;

      setSize(newSize);
    };

    handleElementChange();

    if (!window?.ResizeObserver) return;

    const resizeObserver = new ResizeObserver(handleElementChange);

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [element]);

  return size;
};
