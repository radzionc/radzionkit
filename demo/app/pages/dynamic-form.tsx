import { JobApplication } from '@demo/app/components/JobApplication'
import { DemoPage } from '@demo/app/components/DemoPage'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Dynamic Form" youtubeVideoId="QYVlkk6WMmc">
      <JobApplication />
    </DemoPage>
  )
})
