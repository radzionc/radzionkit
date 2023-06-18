import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Panel } from 'lib/ui/Panel/Panel'
import { Text } from 'lib/ui/Text'
import { SeparatedByLine } from 'lib/ui/SeparatedByLine'

const SeparatedByLinePage: NextPage = () => {

  return (
    <DemoPage title="Separated By Line">
      <SeparatedByLine gap={16}>
        <Text>
          First section
        </Text>
        <Text>
          Second section
        </Text>
      </SeparatedByLine>
    </DemoPage>
  )
}

export default SeparatedByLinePage
