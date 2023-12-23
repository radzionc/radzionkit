import { DemoPage } from 'components/DemoPage'
import { Checkbox } from '@radzionkit/ui/inputs/Checkbox/Checkbox'
import { useState } from 'react'
import { VStack } from '@radzionkit/ui/layout/Stack'
import { Text } from '@radzionkit/ui/text'
import { InfoIcon } from '@radzionkit/ui/icons/InfoIcon'
import { makeDemoPage } from 'layout/makeDemoPage'
import { TimeoutMessage } from '@radzionkit/ui/base/TimeoutMessage'

export default makeDemoPage(() => {
  const [one, setOne] = useState(false)
  const [another, setAnother] = useState(false)

  return (
    <DemoPage title="Timeout Message" youtubeVideoId="tUbas1Ni2yo">
      <VStack gap={20}>
        <Checkbox
          label="First timeout message trigger"
          value={one}
          onChange={setOne}
        />
        <Checkbox
          label="Second timeout message trigger"
          value={another}
          onChange={setAnother}
        />
        <TimeoutMessage
          deps={[one, another]}
          timeout={5000}
          render={() => (
            <Text color="supporting" size={14} height="large">
              <Text
                centered
                as="span"
                style={{ marginRight: 8, verticalAlign: 'middle' }}
              >
                <InfoIcon />
              </Text>
              It could take up to 10 minutes for your changes to be reflected
            </Text>
          )}
        />
      </VStack>
    </DemoPage>
  )
})
