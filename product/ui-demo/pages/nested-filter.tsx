import { CuratedHabits } from '@product/ui-demo/components/CuratedHabits'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Nested Filter" youtubeVideoId="Atk9g-KT144">
      <CuratedHabits />
    </DemoPage>
  )
})
