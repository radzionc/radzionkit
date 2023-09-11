import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Navigation } from 'navigation'
import { Checkbox } from '@reactkit/ui/ui/inputs/Checkbox/Checkbox'
import { useState } from 'react'
import { VStack } from '@reactkit/ui/ui/Stack'
import { TimeoutMessage } from '@reactkit/ui/ui/TimeoutMessage'
import { Text } from '@reactkit/ui/ui/Text'
import { InfoIcon } from '@reactkit/ui/ui/icons/InfoIcon'

const TagPage: NextPage = () => {
  const [one, setOne] = useState(false)
  const [another, setAnother] = useState(false)

  return (
    <Navigation>
      <DemoPage title="Timeout Message">
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
    </Navigation>
  )
}

export default TagPage
