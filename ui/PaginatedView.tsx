import { ReactNode, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import { Spinner } from "./Spinner";
import { HStack, VStack } from "./Stack";
import { Text } from "./Text";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  onRequestToLoadMore: () => void;
}

const LoaderContainer = styled(HStack)`
  color: ${({ theme }) => theme.colors.textSupporting2.toCssValue()};
`;

const Footer = styled(VStack)`
  grid-column: 1/-1;
`;

export const PaginatedView = ({
  children,
  isLoading,
  onRequestToLoadMore,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "200px",
    threshold: 0,
  });

  useEffect(() => {
    if (intersection?.isIntersecting && !isLoading) {
      onRequestToLoadMore();
    }
  }, [intersection?.isIntersecting, onRequestToLoadMore, isLoading]);

  return (
    <>
      {children}
      <Footer fullWidth alignItems="center">
        <div ref={ref} />
        {isLoading && (
          <LoaderContainer
            fullWidth
            gap={8}
            justifyContent="center"
            alignItems="center"
          >
            <Spinner size={16} />
            <Text>Loading</Text>
          </LoaderContainer>
        )}
      </Footer>
    </>
  );
};
