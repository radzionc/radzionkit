import React, { useState, useRef } from 'react'
import { useClickAway } from 'react-use';
import styled from 'styled-components'
import { DropdownMenu } from './DropdownMenu';

interface Props {
  children: React.ReactNode,
  menu?: React.ReactNode,
  onClickOutside?: () => void;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DropdownMenuPlacer = ({ children, menu, onClickOutside }: Props) => {
  const wrapperElement = useRef<HTMLDivElement>(null);
  const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null);

  useClickAway(wrapperElement, () => onClickOutside?.())

  return (
    <Container ref={wrapperElement}>
      <Container ref={setContainerElement}>
        {children}
      </Container>
      {containerElement && (
        <DropdownMenu referenceElement={containerElement}>
          {menu}
        </DropdownMenu>
      )}
    </Container>
  )
}
 