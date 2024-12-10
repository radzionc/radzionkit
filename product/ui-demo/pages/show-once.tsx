import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { ShowOnce } from '@product/ui-demo/state/ShowOnce'
import { PersistentStateKey } from '@product/ui-demo/state/persistentState'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { ClientOnly } from '@lib/ui/base/ClientOnly'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Show once" youtubeVideoId="jFKjpAsm24I">
      <ClientOnly>
        <ShowOnce storageKey={PersistentStateKey.ShowOnceEducation}>
          You will see this sentence only once.
        </ShowOnce>
      </ClientOnly>
    </DemoPage>
  )
})
