import { Chain, createWalletClient, http, WalletClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

type Input = {
  chain: Chain
  privateKey: `0x${string}`
}

export const getWalletClient = ({ chain, privateKey }: Input): WalletClient => {
  return createWalletClient({
    chain,
    transport: http(),
    account: privateKeyToAccount(privateKey),
  })
}
