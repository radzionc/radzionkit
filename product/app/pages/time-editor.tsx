import { ClientOnly } from '@lib/ui/base/ClientOnly'
import { DemoPage } from '@product/app/components/DemoPage'
import { TimeEditor } from '@product/app/components/TimeEditor/TimeEditor'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="Wns4IRaaryI" title="Time Editor">
      <ClientOnly>
        <TimeEditor />
      </ClientOnly>
    </DemoPage>
  )
})
