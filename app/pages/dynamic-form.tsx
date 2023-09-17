import { JobApplication } from 'components/JobApplication'
import { DemoPage } from 'components/DemoPage'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Dynamic Form" youtubeVideoId="QYVlkk6WMmc">
      <JobApplication />
    </DemoPage>
  )
})
