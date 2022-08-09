import { ReactNode } from "react";
import styled from "styled-components";
import { Spacer } from "ui/Spacer";
import { VStack } from "ui/Stack";
import { Text } from "ui/Text";
import { getCSSUnit } from "ui/utils/getCSSUnit";

type PageWidth = "m" | "s";

interface Props {
  children: ReactNode;
  title?: ReactNode;
  width?: PageWidth;
}

const maxWidth: Record<PageWidth, number> = {
  m: 1036,
  s: 750,
};

const Container = styled(VStack)<{ maxWidth: number }>`
  width: ${({ maxWidth }) => getCSSUnit(maxWidth)};

  @media (max-width: ${({ maxWidth }) => getCSSUnit(maxWidth)}) {
    width: calc(100vw - 40px);
  }
`;

export const RegularPage = ({ children, title, width = "m" }: Props) => {
  return (
    <VStack fullWidth alignItems="center">
      <Container maxWidth={maxWidth[width]} alignItems="start">
        <Spacer height={48} />
        {title && (
          <>
            <Text weight="bold" size={24} color="regular" as="div">
              {title}
            </Text>
            <Spacer height={32} />
          </>
        )}
        {children}
      </Container>
      <Spacer height={40} />
    </VStack>
  );
};
