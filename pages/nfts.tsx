import { NftsViewer } from "components/Nfts/NftsViewer";
import type { NextPage } from "next";

import { DemoPage } from "components/DemoPage";

const NftsPage: NextPage = () => {
  return (
    <DemoPage title="NFTs">
      <NftsViewer />
    </DemoPage>
  );
};

export default NftsPage;
