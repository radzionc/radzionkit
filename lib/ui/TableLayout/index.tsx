import { CSSProperties } from "react";
import { ComponentWithChildrenProps } from "lib/shared/props";
import styled from "styled-components";
import { Line } from "lib/ui/Line";
import { Text } from "lib/ui/Text";

interface Props extends ComponentWithChildrenProps {
  columnNames: string[];
  gridTemplateColumns: CSSProperties["gridTemplateColumns"];
}

const Container = styled.div`
  display: grid;
  gap: 16px 48px;
  align-items: center;
`;

const Separator = styled(Line)`
  grid-column: 1/-1;
`;

export const TableLayout = ({
  children,
  columnNames,
  gridTemplateColumns,
}: Props) => {
  return (
    <Container style={{ gridTemplateColumns }}>
      {columnNames.map((name) => (
        <Text weight="regular" color="supporting3" key={name}>
          {name}
        </Text>
      ))}
      <Separator />
      {children}
    </Container>
  );
};
