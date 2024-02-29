import { DemoPage } from '@demo/app/components/DemoPage'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'
import { RadzionResume } from '../resume/RadzionResume'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="LyhdaMK7_uU" title="Radzion's Resume">
      <RadzionResume />
    </DemoPage>
  )
})
