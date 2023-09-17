import { DemoPage } from 'components/DemoPage'
import { CuratedHabits } from 'components/CuratedHabits'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Nested Filter" youtubeVideoId="Atk9g-KT144">
      <CuratedHabits />
    </DemoPage>
  )
})
