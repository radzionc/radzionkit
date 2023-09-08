import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { WorkBudgetForm } from 'components/WorkBudgetForm'
import { Navigation } from 'navigation'

const SliderPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="HqfFtOh8_50" title="Slider">
        <WorkBudgetForm />
      </DemoPage>
    </Navigation>
  )
}

export default SliderPage
