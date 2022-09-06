import { NftsViewer } from "components/Nfts/NftsViewer";
import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";

import { RegularPage } from "ui/page/RegularPage";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";

const NftsPage: NextPage = () => {
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>NFTs</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/nfts.tsx" />
        </HStack>
      }
    >
      <NftsViewer />
    </RegularPage>
  );
};

export default NftsPage;
