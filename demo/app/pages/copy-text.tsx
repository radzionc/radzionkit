import { CopyText } from '@lib/ui/text/CopyText'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="sUKTden0DSI" title="Copy Text">
      <CopyText content="https://increaser.org">Increaser URL</CopyText>
    </DemoPage>
  )
})
