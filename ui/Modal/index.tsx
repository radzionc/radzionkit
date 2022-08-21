import FocusTrap from "focus-trap-react";
import React, { ReactNode, useEffect } from "react";
import { useKey } from "react-use";
import { handleWithStopPropagation } from "shared/events";
import styled, { css } from "styled-components";
import { BodyPortal } from "ui/BodyPortal";
import { CloseIconButton } from "ui/buttons/square/CloseIconButton";
import { useIsScreenWidthLessThan } from "ui/hooks/useIsScreenWidthLessThan";
import { ScreenCover } from "ui/ScreenCover";
import { Spacer } from "ui/Spacer";
import { HStack } from "ui/Stack";
import { getCSSUnit } from "ui/utils/getCSSUnit";
import { getSameDimensionsCSS } from "ui/utils/getSameDimensionsCSS";

import { ModalTitleText } from "./ModalTitleText";

interface RenderContentParams {
  isFullScreen: boolean;
}

type ModalTitlePlacement = "left" | "center";

type ModalPlacement = "top" | "center";

export interface Props {
  renderContent: (params: RenderContentParams) => React.ReactNode;
  width?: number | string;
  onClose?: () => void;
  placement?: ModalPlacement;

  hasImplicitClose?: boolean;
  title?: ReactNode;
  titlePlacement?: ModalTitlePlacement;
  className?: string;
  padding?: string | number;
}

const MIN_HORIZONTAL_FREE_SPACE_IN_PX = 120;

interface ContainerProps {
  isFullScreen: boolean;
  width: number | string;
  placement?: ModalPlacement;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  max-height: 100%;

  background: ${({ theme: { name, colors } }) =>
    (name === "light" ? colors.background : colors.foreground).toCssValue()};

  ${({ isFullScreen, width, placement }) =>
    isFullScreen
      ? getSameDimensionsCSS("100%")
      : css`
          width: ${getCSSUnit(width)};
          border-radius: 16px;
          max-height: 92%;
          ${placement === "top" &&
          `
            align-self: start;
            margin-top: 4%;
          `}
        `}
`;

const Content = styled.div`
  ${getSameDimensionsCSS("100%")};
  overflow-y: auto;
`;

export const Modal = ({
  renderContent,
  onClose,
  title = null,
  width = 400,
  hasImplicitClose = true,
  titlePlacement = "left",
  placement = "center",
  padding = 20,
  className,
}: Props) => {
  const isFullScreen = useIsScreenWidthLessThan(
    `calc(${getCSSUnit(width)} + ${MIN_HORIZONTAL_FREE_SPACE_IN_PX}px)`
  );

  useKey("Escape", () => {
    onClose?.();
  });

  useEffect(() => {
    window.history.pushState(null, "modal");
    window.onpopstate = () => {
      if (onClose) {
        onClose();
      } else {
        window.history.pushState(null, "modal");
      }
    };

    return () => {
      window.onpopstate = null;
    };
  });

  const hasCloseButton = (hasImplicitClose || isFullScreen) && onClose;

  const headerPadding = [padding, padding, 0, padding]
    .map(getCSSUnit)
    .join(" ");
  const contentPadding = [0, padding, padding, padding]
    .map(getCSSUnit)
    .join(" ");

  return (
    <BodyPortal>
      <ScreenCover onClick={onClose ? () => onClose() : undefined}>
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            fallbackFocus: "#container",
          }}
        >
          <Container
            placement={placement}
            className={className}
            id="container"
            isFullScreen={isFullScreen}
            width={width}
            onClick={handleWithStopPropagation()}
          >
            <HStack
              style={{ padding: headerPadding }}
              alignItems="center"
              justifyContent="space-between"
            >
              {(titlePlacement === "center" || !title) &&
                (hasCloseButton ? <Spacer width={32} /> : <div />)}
              {title && <ModalTitleText>{title}</ModalTitleText>}
              {hasCloseButton && (
                <CloseIconButton size="l" onClick={() => onClose?.()} />
              )}
            </HStack>
            {(title || hasCloseButton) && <Spacer height={20} />}
            <Content style={{ padding: contentPadding }}>
              {renderContent({ isFullScreen })}
            </Content>
          </Container>
        </FocusTrap>
      </ScreenCover>
    </BodyPortal>
  );
};
