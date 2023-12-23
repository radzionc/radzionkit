import { DemoPage } from 'components/DemoPage'
import { CopyText } from '@radzionkit/ui/text/CopyText'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="sUKTden0DSI" title="Copy Text">
      <CopyText content="https://increaser.org">Increaser URL</CopyText>
    </DemoPage>
  )
})
