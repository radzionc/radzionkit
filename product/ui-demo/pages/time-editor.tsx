import { ClientOnly } from '@lib/ui/base/ClientOnly'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { TimeEditor } from '@product/ui-demo/components/TimeEditor/TimeEditor'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="Wns4IRaaryI" title="Time Editor">
      <ClientOnly>
        <TimeEditor />
      </ClientOnly>
    </DemoPage>
  )
})
