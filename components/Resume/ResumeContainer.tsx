import { ComponentWithChildrenProps } from "lib/shared/props";
import { Panel } from "lib/ui/Panel/Panel";
import styled from "styled-components";

const Container = styled(Panel)`
  width: 880px;
  aspect-ratio: 1 / 1.414;

  background: ${({ theme }) => theme.colors.background.toCssValue()};
`;

export const ResumeContainer = ({ children }: ComponentWithChildrenProps) => {
  return <Container>{children}</Container>;
};
