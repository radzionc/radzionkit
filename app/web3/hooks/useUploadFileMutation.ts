import { useMutation } from 'react-query'
import { useWeb3Storage } from 'web3/components/Web3StorageProvider'

export const useUploadFileMutation = () => {
  const { storage } = useWeb3Storage()

  return useMutation(async (file: File) => {
    const cid = await storage.put([file])

    // TODO: Pin the CID

    return `https://ipfs.io/ipfs/${cid}/${encodeURI(file.name)}`
  })
}
