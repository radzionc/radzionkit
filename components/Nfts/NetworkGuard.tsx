import { useWeb3React } from "@web3-react/core";
import { ReactNode } from "react";
import { parseNumericEnum } from "shared/utils/parseNumericEnum";
import { Modal } from "ui/Modal";
import { Text } from "ui/Text";

interface Props {
  children: ReactNode;
}

export enum SupportedChain {
  Mainnet = 1,
  Goerli = 420,
}

const { keys: supportedChainNames, values: supportedChainIds } =
  parseNumericEnum(SupportedChain);

export const NetworkGuard = ({ children }: Props) => {
  const { chainId } = useWeb3React();

  if (chainId === undefined) {
    return <>{children}</>;
  }

  if (!supportedChainIds.includes(chainId)) {
    return (
      <Modal
        title="Unsupported network"
        renderContent={() => (
          <Text size={18} color="supporting">
            👉 Please change your network to{" "}
            <Text as="span" color="regular">
              {supportedChainNames.join(" or ")}
            </Text>{" "}
          </Text>
        )}
      />
    );
  }

  return <>{children}</>;
};
