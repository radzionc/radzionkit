import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { ElementSizeAware } from "lib/ui/ElementSizeAware";
import { SelectOption } from "lib/ui/inputs/Select/SelectOption";
import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

export const focusOptions = [
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  60,
  90,
  "infinite",
] as const;

export type FocusDuration = typeof focusOptions[number];

const SelectContainer = styled.div<{ isSmallScreen: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ isSmallScreen }) =>
    isSmallScreen ? "repeat(5, 1fr)" : "repeat(6, 60px)"};
  gap: 8px;

  > * {
    :last-child {
      grid-column: ${({ isSmallScreen }) =>
        isSmallScreen ? "1 / -1" : "5 / span 2"};
    }
  }
`;

const ButtonPage: NextPage = () => {
  const [focusDuration, setFocusDuration] = useState<FocusDuration>(25);

  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Select</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/select.tsx" />
        </HStack>
      }
    >
      <ElementSizeAware
        render={({ setElement, size }) => (
          <VStack alignItems="start" fullWidth ref={setElement}>
            {size && (
              <SelectContainer isSmallScreen={size.width < 400}>
                {focusOptions.map((option) => (
                  <SelectOption
                    groupName="focus-duration"
                    isSelected={focusDuration === option}
                    key={option}
                    value={option}
                    onSelect={() => setFocusDuration(option)}
                  >
                    {option === "infinite" ? "stopwatch" : option}
                  </SelectOption>
                ))}
              </SelectContainer>
            )}
          </VStack>
        )}
      />
    </RegularPage>
  );
};

export default ButtonPage;
