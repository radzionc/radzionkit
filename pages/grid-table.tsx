import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { Fragment } from "react";
import styled from "styled-components";
import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack } from "lib/ui/Stack";
import { TableLayout } from "lib/ui/TableLayout";
import { Text } from "lib/ui/Text";
import { getSameDimensionsCSS } from "lib/ui/utils/getSameDimensionsCSS";

interface Token {
  symbolImageUrl: string;
  symbol: string;
  name: string;
  price: number;
}

const tokens: Token[] = [
  {
    symbolImageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
    symbol: "BTC",
    name: "Bitcoin",
    price: 23076.62,
  },
  {
    symbolImageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    symbol: "ETH",
    name: "Ethereum",
    price: 1697.23,
  },
  {
    symbolImageUrl: "https://cryptologos.cc/logos/cardano-ada-logo.svg",
    symbol: "ADA",
    name: "Cardano",
    price: 0.51,
  },
];

const TokenIcon = styled.img`
  ${getSameDimensionsCSS(24)}
`;

const GridTablePage: NextPage = () => {
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>CSS Grid Table</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/grid-table.tsx" />
        </HStack>
      }
    >
      <TableLayout
        gridTemplateColumns="minmax(auto, 120px) auto 1fr"
        columnNames={["Token name", "Symbol", "Price"]}
      >
        {tokens.map(({ symbolImageUrl, symbol, name, price }) => (
          <Fragment key={symbol}>
            <HStack alignItems="center" gap={8}>
              <TokenIcon src={symbolImageUrl} />
              <Text cropped>{name}</Text>
            </HStack>
            <Text color="supporting">{symbol}</Text>
            <Text color="supporting">${price}</Text>
          </Fragment>
        ))}
      </TableLayout>
    </RegularPage>
  );
};

export default GridTablePage;
