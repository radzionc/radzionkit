import { DemoPage } from '@product/app/components/DemoPage'
import { ShowOnce } from '@product/app/state/ShowOnce'
import { PersistentStateKey } from '@product/app/state/persistentState'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'
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
