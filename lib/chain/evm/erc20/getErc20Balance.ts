import { Address, Chain, createPublicClient, http, parseAbi } from 'viem'

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
  const erc20Abi = parseAbi([
    'function balanceOf(address owner) view returns (uint256)',
  ])

  const publicClient = createPublicClient({
    chain,
    transport: http(),
  })

  return publicClient.readContract({
    address,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [accountAddress],
  })
}
