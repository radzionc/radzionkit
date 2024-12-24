import { createClientV2 } from '@0x/swap-ts-sdk'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import {
  Address,
  Chain,
  concat,
  Hex,
  maxUint256,
  numberToHex,
  size,
} from 'viem'
import { TransferDirection } from '@lib/utils/TransferDirection'
import { assertField } from '@lib/utils/record/assertField'
import { privateKeyToAccount } from 'viem/accounts'
import { setErc20Allowance } from './setErc20Allowance'
import { getWalletClient } from '../utils/getWalletClient'
import { getPublicClient } from '../utils/getPublicClient'
import { assertTx } from '../utils/assertTx'

type Input = Record<TransferDirection, Address> & {
  chain: Chain
  zeroXApiKey: string
  amount: bigint
  privateKey: `0x${string}`
}

export const swapErc20Token = async ({
  zeroXApiKey,
  chain,
  from,
  to,
  amount,
  privateKey,
}: Input) => {
  const client = createClientV2({
    apiKey: zeroXApiKey,
  })

  const publicClient = getPublicClient(chain)

  const account = privateKeyToAccount(privateKey)

  const walletClient = getWalletClient({ chain, privateKey })

  const quote = await client.swap.permit2.getQuote.query({
    sellToken: from,
    buyToken: to,
    chainId: chain.id,
    sellAmount: amount.toString(),
    taker: account.address,
  })

  if ('issues' in quote) {
    const { allowance } = quote.issues
    if (allowance) {
      const { spender } = allowance
      await setErc20Allowance({
        chain,
        privateKey,
        tokenAddress: from,
        spender: spender as Address,
        amount: maxUint256,
      })
    }
  }

  const transaction = assertField(quote, 'transaction')

  const { eip712 } = assertField(quote, 'permit2')

  const signature = await walletClient.signTypedData(eip712 as any)

  const signatureLengthInHex = numberToHex(size(signature), {
    signed: false,
    size: 32,
  })

  transaction.data = concat([
    transaction.data as Hex,
    signatureLengthInHex,
    signature,
  ])

  const nonce = await publicClient.getTransactionCount({
    address: account.address,
  })

  const hash = await walletClient.sendTransaction({
    gas: BigInt(shouldBePresent(transaction.gas, 'gas')),
    to: transaction.to as Address,
    data: transaction.data as `0x${string}`,
    value: BigInt(transaction.value),
    gasPrice: BigInt(transaction.gasPrice),
    nonce,
  })

  return assertTx({ publicClient, hash })
}
