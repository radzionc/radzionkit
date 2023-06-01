import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { CalendarEditor } from 'components/CalendarEditor/CalendarEditor'
import { ClientOnly } from 'lib/ui/ClientOnly'

const CalendarEditorPage: NextPage = () => {
  return (
    <DemoPage title="Calendar Editor">
      <ClientOnly>
        <CalendarEditor />
      </ClientOnly>
    </DemoPage>
  )
}

export default CalendarEditorPage
