import {
  initializeConnector,
  Web3ReactHooks,
  Web3ReactProvider,
} from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { ComponentWithChildrenProps } from "lib/shared/props";
import { EagerlyConnectWallet } from "./EagerlyConnectWallet";

export const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

export const WalletProvider = ({ children }: ComponentWithChildrenProps) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <EagerlyConnectWallet />
      {children}
    </Web3ReactProvider>
  );
};
