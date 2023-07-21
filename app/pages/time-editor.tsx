import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { ClientOnly } from "@reactkit/ui/ui/ClientOnly"
import { TimeEditor } from "components/TimeEditor/TimeEditor"

const TimeEditorPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="Wns4IRaaryI" title="Time Editor">
      <ClientOnly>
        <TimeEditor />
      </ClientOnly>
    </DemoPage>
  )
}

export default TimeEditorPage
