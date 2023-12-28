import { DemoPage } from '@demo/app/components/DemoPage'
import { WorkBudgetForm } from '@demo/app/components/WorkBudgetForm'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="HqfFtOh8_50" title="Slider">
      <WorkBudgetForm />
    </DemoPage>
  )
})
