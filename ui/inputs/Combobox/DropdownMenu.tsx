import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import { zIndex } from "ui/zIndex";
import throttle from "lodash/throttle";
import { useElementSize } from "ui/hooks/useElementSize";

const MenuWr = styled.div`
  z-index: ${zIndex.menu};
`;

interface Props {
  children: React.ReactNode;
  referenceElement: HTMLElement;
}

export const DropdownMenu = ({ children, referenceElement }: Props) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom-start",
      strategy: "fixed",

      modifiers: useMemo(
        () => [
          {
            name: "flip",
            options: {
              fallbackPlacements: ["top"],
            },
          },
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
          {
            name: "preventOverflow",
            options: {
              padding: 8,
            },
          },
          {
            name: "sameWidth",
            enabled: true,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn({ state }: any) {
              state.styles.popper.width = `${state.rects.reference.width}px`;
            },
            effect({ state }: any) {
              state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
            },
          },
        ],
        []
      ),
    }
  );

  const size = useElementSize(popperElement);
  useEffect(() => {
    throttle(update ?? (() => null), 200);
  }, [size, update]);

  return (
    <MenuWr ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      {children}
    </MenuWr>
  );
};
