import { DemoPage } from '@product/app/components/DemoPage'
import { CuratedHabits } from '@product/app/components/CuratedHabits'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Nested Filter" youtubeVideoId="Atk9g-KT144">
      <CuratedHabits />
    </DemoPage>
  )
})
