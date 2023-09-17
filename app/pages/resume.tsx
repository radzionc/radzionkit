import { DemoPage } from 'components/DemoPage'
import { Resume } from 'components/Resume'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="LyhdaMK7_uU" title="Radzion's Resume">
      <Resume />
    </DemoPage>
  )
})
