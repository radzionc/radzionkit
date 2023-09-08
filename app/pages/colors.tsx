import type { NextPage } from 'next'
import { ColorList } from 'components/ColorList'
import { DemoPage } from 'components/DemoPage'
import { Navigation } from 'navigation'

const StacksPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="ed_bLoV_A6M" title="Colors">
        <ColorList />
      </DemoPage>
    </Navigation>
  )
}

export default StacksPage
