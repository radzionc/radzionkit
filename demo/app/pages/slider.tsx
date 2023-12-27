import { DemoPage } from 'components/DemoPage'
import { WorkBudgetForm } from 'components/WorkBudgetForm'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="HqfFtOh8_50" title="Slider">
      <WorkBudgetForm />
    </DemoPage>
  )
})
