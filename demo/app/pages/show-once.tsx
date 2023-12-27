import { DemoPage } from 'components/DemoPage'
import { ShowOnce } from 'state/ShowOnce'
import { PersistentStateKey } from 'state/persistentState'
import { makeDemoPage } from 'layout/makeDemoPage'
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
