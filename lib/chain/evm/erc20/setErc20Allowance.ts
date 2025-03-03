import { Address, Chain, erc20Abi } from 'viem'

import { assertTx } from '../utils/assertTx'
import { getPublicClient } from '../utils/getPublicClient'
import { getWalletClient } from '../utils/getWalletClient'

type Input = {
  chain: Chain
  privateKey: `0x${string}`
  tokenAddress: Address
  spender: Address
  amount: bigint
}

export async function setErc20Allowance({
  chain,
  privateKey,
  tokenAddress,
  spender,
  amount,
}: Input) {
  const walletClient = getWalletClient({ chain, privateKey })

  const hash = await walletClient.writeContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'approve',
    args: [spender, amount],
  })

  return assertTx({ publicClient: getPublicClient(chain), hash })
}
