import type { NextPage } from "next"

import { DemoPage } from "components/DemoPage"
import { Resume } from "components/Resume"

const ResumePage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="LyhdaMK7_uU" title="Radzion's Resume">
      <Resume />
    </DemoPage>
  )
}

export default ResumePage
