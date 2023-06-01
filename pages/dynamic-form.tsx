import type { NextPage } from 'next'
import { JobApplication } from 'components/JobApplication'
import { DemoPage } from 'components/DemoPage'

const DynamicFormPage: NextPage = () => {
  return (
    <DemoPage title="Dynamic Form" youtubeVideoId="QYVlkk6WMmc">
      <JobApplication />
    </DemoPage>
  )
}

export default DynamicFormPage
