import type { NextPage } from 'next'

import { DemoPage } from 'components/DemoPage'
import { Resume } from 'components/Resume'
import { Navigation } from 'navigation'

const ResumePage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="LyhdaMK7_uU" title="Radzion's Resume">
        <Resume />
      </DemoPage>
    </Navigation>
  )
}

export default ResumePage
