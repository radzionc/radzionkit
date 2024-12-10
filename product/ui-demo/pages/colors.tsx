import { ColorList } from '../components/ColorList'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="N5nsvOmSUrU" title="Colors">
      <ColorList />
    </DemoPage>
  )
})
