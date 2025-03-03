import { VStack } from '@lib/ui/css/stack'

import { InfoIcon } from '../../icons/InfoIcon'
import { Spinner } from '../../loaders/Spinner'
import { Text } from '../../text'
import { CopyText } from '../../text/CopyText'

interface BlockingQueryProps {
  error?: Error | null
  supportEmail: string
}

export const BlockingQuery = ({ error, supportEmail }: BlockingQueryProps) => {
  return (
    <VStack alignItems="center" gap={20}>
      <Text
        style={{ display: 'flex' }}
        color={error ? 'alert' : 'regular'}
        size={80}
      >
        {error ? <InfoIcon /> : <Spinner />}
      </Text>
      {error ? (
        <>
          <Text
            color="regular"
            style={{ wordBreak: 'break-word' }}
            centerHorizontally
            height="l"
          >
            {error.message}
          </Text>
          <Text centerHorizontally color="supporting" size={14}>
            Nothing helps? Email us at <br />
            <CopyText color="regular" content={supportEmail}>
              {supportEmail}
            </CopyText>
          </Text>
        </>
      ) : (
        <Text color="supporting">Please wait</Text>
      )}
    </VStack>
  )
}
