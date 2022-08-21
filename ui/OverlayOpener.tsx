import { ReactNode } from "react";
import { useBoolean } from "shared/hooks/useBoolean";
import { ClosableComponentProps } from "shared/props";

interface RenderOpenerParams {
  onOpen: () => void;
}

interface Props {
  renderOpener: (params: RenderOpenerParams) => ReactNode;
  renderOverlay: (params: ClosableComponentProps) => ReactNode;
}

export const OverlayOpener = ({ renderOpener, renderOverlay }: Props) => {
  const [isOpen, { set: onOpen, unset: onClose }] = useBoolean(false);

  return (
    <>
      {isOpen && renderOverlay({ onClose })}
      {renderOpener({ onOpen })}
    </>
  );
};
