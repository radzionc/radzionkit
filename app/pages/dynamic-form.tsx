import type { NextPage } from 'next'
import { JobApplication } from 'components/JobApplication'
import { DemoPage } from 'components/DemoPage'
import { Navigation } from 'navigation'

const DynamicFormPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage title="Dynamic Form" youtubeVideoId="QYVlkk6WMmc">
        <JobApplication />
      </DemoPage>
    </Navigation>
  )
}

export default DynamicFormPage
