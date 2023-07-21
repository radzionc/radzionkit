import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { CopyText } from "@reactkit/ui/ui/CopyText"

const CopyTextPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="sUKTden0DSI" title="Copy Text">
      <CopyText content="https://increaser.org">Increaser URL</CopyText>
    </DemoPage>
  )
}

export default CopyTextPage
