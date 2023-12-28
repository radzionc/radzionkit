import { DemoPage } from '@demo/app/components/DemoPage'
import { Resume } from '@demo/app/components/Resume'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="LyhdaMK7_uU" title="Radzion's Resume">
      <Resume />
    </DemoPage>
  )
})
