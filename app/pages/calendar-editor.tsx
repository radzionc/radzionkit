import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { CalendarEditor } from 'components/CalendarEditor/CalendarEditor'
import { ClientOnly } from '@reactkit/ui/ui/ClientOnly'
import { Navigation } from 'navigation'

const CalendarEditorPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="sBfDwymJWw0" title="Calendar Editor">
        <ClientOnly>
          <CalendarEditor />
        </ClientOnly>
      </DemoPage>
    </Navigation>
  )
}

export default CalendarEditorPage
