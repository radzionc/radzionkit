import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { CuratedHabits } from 'components/CuratedHabits'
import { Navigation } from 'navigation'

const NestedFilterPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage title="Nested Filter">
        <CuratedHabits />
      </DemoPage>
    </Navigation>
  )
}

export default NestedFilterPage
