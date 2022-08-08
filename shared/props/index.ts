import { ReactNode } from "react";

export type ClosableComponentProps = {
  onClose: () => void;
};

export type ComponentWithIconProps = {
  icon: ReactNode;
};

export type ComponentWithChildrenProps = {
  children: ReactNode;
};

export type ComponentWithBackActionProps = {
  onBack: () => void;
};
