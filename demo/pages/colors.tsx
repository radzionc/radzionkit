import { ColorList } from 'components/ColorList'
import { DemoPage } from 'components/DemoPage'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="ed_bLoV_A6M" title="Colors">
      <ColorList />
    </DemoPage>
  )
})
