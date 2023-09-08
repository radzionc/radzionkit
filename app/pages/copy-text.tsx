import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { CopyText } from '@reactkit/ui/ui/CopyText'
import { Navigation } from 'navigation'

const CopyTextPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="sUKTden0DSI" title="Copy Text">
        <CopyText content="https://increaser.org">Increaser URL</CopyText>
      </DemoPage>
    </Navigation>
  )
}

export default CopyTextPage
