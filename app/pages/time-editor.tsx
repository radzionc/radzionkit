import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { ClientOnly } from '@reactkit/ui/ui/ClientOnly'
import { TimeEditor } from 'components/TimeEditor/TimeEditor'
import { Navigation } from 'navigation'

const TimeEditorPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="Wns4IRaaryI" title="Time Editor">
        <ClientOnly>
          <TimeEditor />
        </ClientOnly>
      </DemoPage>
    </Navigation>
  )
}

export default TimeEditorPage
