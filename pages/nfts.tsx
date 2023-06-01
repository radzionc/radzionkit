import { NftsViewer } from 'components/Nfts/NftsViewer'
import type { NextPage } from 'next'

import { DemoPage } from 'components/DemoPage'

const NftsPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="J0cf-9WMo7I" title="NFTs">
      <NftsViewer />
    </DemoPage>
  )
}

export default NftsPage
