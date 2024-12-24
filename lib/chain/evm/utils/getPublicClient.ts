import { Chain, createPublicClient, http } from 'viem'

export const getPublicClient = (chain: Chain) =>
  createPublicClient({
    chain,
    transport: http(),
  })
