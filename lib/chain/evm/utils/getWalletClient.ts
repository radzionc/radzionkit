import { Chain, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

type Input = {
  chain: Chain
  privateKey: `0x${string}`
}

export const getWalletClient = ({ chain, privateKey }: Input) => {
  return createWalletClient({
    chain,
    transport: http(),
    account: privateKeyToAccount(privateKey),
  })
}
