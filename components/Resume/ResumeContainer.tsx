import { defaultBorderRadiusCSS } from "lib/ui/borderRadius";
import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 880px;
  aspect-ratio: 1 / 1.414;

  display: flex;
  flex-direction: column;
  gap: 2px;
  background: ${({ theme }) => theme.colors.foreground.toCssValue()};
  border: 2px solid ${({ theme }) => theme.colors.foreground.toCssValue()};

  ${defaultBorderRadiusCSS}
  overflow: hidden;

  > * {
    background: ${({ theme }) => theme.colors.background.toCssValue()};
    padding: 20px;
  }

  @media print {
    width: 100%;
    height: 100%;
    border-radius: 0;
    border: none;
  }
`;
