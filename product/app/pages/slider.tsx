import { DemoPage } from '@product/app/components/DemoPage'
import { WorkBudgetForm } from '@product/app/components/WorkBudgetForm'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="HqfFtOh8_50" title="Slider">
      <WorkBudgetForm />
    </DemoPage>
  )
})
