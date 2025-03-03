import { ClientOnly } from '@lib/ui/base/ClientOnly'

import { CalendarEditor } from '../components/CalendarEditor/CalendarEditor'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="sBfDwymJWw0" title="Calendar Editor">
      <ClientOnly>
        <CalendarEditor />
      </ClientOnly>
    </DemoPage>
  )
})
