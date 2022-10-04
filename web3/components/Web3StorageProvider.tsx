import { createContext } from "react";
import { ComponentWithChildrenProps } from "lib/shared/props";
import { createContextHook } from "lib/shared/utils/createContextHook";
import { Text } from "lib/ui/Text";
import { Web3Storage } from "web3.storage";

interface Web3StorageState {
  storage: Web3Storage;
}

const Web3StorageContext = createContext<Web3StorageState | undefined>(
  undefined
);

export const useWeb3Storage = createContextHook(
  Web3StorageContext,
  "Web3StorageContext"
);

export const Web3StorageProvider = ({
  children,
}: ComponentWithChildrenProps) => {
  // DO NOT USE THIS IN PRODUCTION
  // USE WEB3STORAGE CLIENT ON THE SERVER SIDE
  const token = process.env.NEXT_PUBLIC_WEB3_STORAGE_KEY;

  if (!token) {
    return <Text>Web3Storage key is missing</Text>;
  }

  const storage = new Web3Storage({
    token,
  });

  return (
    <Web3StorageContext.Provider
      value={{
        storage,
      }}
    >
      {children}
    </Web3StorageContext.Provider>
  );
};
