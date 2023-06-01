import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

export const EagerlyConnectWallet = () => {
  const { connector } = useWeb3React()

  useEffect(() => {
    connector.connectEagerly?.()
  }, [connector])

  return null
}
