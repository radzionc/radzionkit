import { DemoPage } from 'components/DemoPage'
import { ShowOnce } from 'state/ShowOnce'
import { PersistentStateKey } from 'state/persistentState'
import { ClientOnly } from '@reactkit/ui/ui/ClientOnly'
import { makeDemoPage } from 'layout/makeDemoPage'

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
