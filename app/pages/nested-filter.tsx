import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { CuratedHabits } from 'components/CuratedHabits'

const NestedFilterPage: NextPage = () => {
  return (
    <DemoPage title="Nested Filter">
      <CuratedHabits />
    </DemoPage>
  )
}

export default NestedFilterPage
