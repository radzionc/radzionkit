import { PublicClient } from 'viem'

type Input = {
  publicClient: PublicClient
  hash: `0x${string}`
}

export const assertTx = async ({ publicClient, hash }: Input) => {
  const receipt = await publicClient.waitForTransactionReceipt({ hash })

  if (receipt.status !== 'success') {
    throw new Error(`Transaction was not successful. Status: ${receipt.status}`)
  }

  return hash
}
