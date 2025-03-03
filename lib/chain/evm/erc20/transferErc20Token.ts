import { Address, Chain, erc20Abi } from 'viem'

import { assertTx } from '../utils/assertTx'
import { getPublicClient } from '../utils/getPublicClient'
import { getWalletClient } from '../utils/getWalletClient'

type TransferInput = {
  chain: Chain
  privateKey: `0x${string}`
  tokenAddress: Address
  to: Address
  amount: bigint
}

export const transferErc20Token = async ({
  chain,
  privateKey,
  tokenAddress,
  to,
  amount,
}: TransferInput) => {
  const walletClient = getWalletClient({ chain, privateKey })

  const hash = await walletClient.writeContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'transfer',
    args: [to, amount],
  })

  return assertTx({ publicClient: getPublicClient(chain), hash })
}
