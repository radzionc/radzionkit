import { DemoPage } from 'components/DemoPage'
import { CalendarEditor } from 'components/CalendarEditor/CalendarEditor'
import { ClientOnly } from '@radzionkit/ui/base/ClientOnly'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="sBfDwymJWw0" title="Calendar Editor">
      <ClientOnly>
        <CalendarEditor />
      </ClientOnly>
    </DemoPage>
  )
})
