import { ClientOnly } from '@lib/ui/base/ClientOnly'
import { DemoPage } from '@demo/app/components/DemoPage'
import { TimeEditor } from '@demo/app/components/TimeEditor/TimeEditor'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="Wns4IRaaryI" title="Time Editor">
      <ClientOnly>
        <TimeEditor />
      </ClientOnly>
    </DemoPage>
  )
})
