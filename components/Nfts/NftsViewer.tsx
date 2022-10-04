import { VStack } from "lib/ui/Stack";
import { AlchemyProvider } from "./AlchemyProvider";
import { ConnectedWalletOnly } from "./ConnectedWalletOnly";
import { WalletProvider } from "./WalletProvider";
import { ManageWallet } from "./ManageWallet";
import { NetworkGuard } from "./NetworkGuard";
import { NftList } from "./NftList";

export const NftsViewer = () => {
  return (
    <WalletProvider>
      <NetworkGuard>
        <AlchemyProvider>
          <VStack alignItems="start" fullWidth gap={40}>
            <ManageWallet />
            <ConnectedWalletOnly>
              <NftList />
            </ConnectedWalletOnly>
          </VStack>
        </AlchemyProvider>
      </NetworkGuard>
    </WalletProvider>
  );
};
