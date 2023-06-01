import { useQuery } from 'react-query'
import { useAlchemy } from './AlchemyProvider'
import { useAssertAccount } from './ConnectedWalletOnly'

export const useMyNftsQuery = () => {
  const { alchemySdk } = useAlchemy()
  const account = useAssertAccount()

  return useQuery(
    'my-nfts',
    () => {
      return alchemySdk.nft.getNftsForOwner(account)
    },
    {
      refetchOnMount: true,
      keepPreviousData: false,
    }
  )
}
