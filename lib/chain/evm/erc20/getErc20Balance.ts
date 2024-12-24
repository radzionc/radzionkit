import { Address, Chain, erc20Abi } from 'viem'
import { getPublicClient } from '../utils/getPublicClient'

type Input = {
  chain: Chain
  address: Address
  accountAddress: Address
}

export const getErc20Balance = async ({
  chain,
  address,
  accountAddress,
}: Input) => {
  const publicClient = getPublicClient(chain)

  return publicClient.readContract({
    address,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [accountAddress],
  })
}
