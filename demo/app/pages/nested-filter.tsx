import { DemoPage } from '@demo/app/components/DemoPage'
import { CuratedHabits } from '@demo/app/components/CuratedHabits'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Nested Filter" youtubeVideoId="Atk9g-KT144">
      <CuratedHabits />
    </DemoPage>
  )
})
