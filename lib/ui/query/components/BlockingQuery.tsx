import { CopyText } from '../../text/CopyText'
import { Spinner } from '../../loaders/Spinner'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '../../text'
import { InfoIcon } from '../../icons/InfoIcon'

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
            centered
            height="large"
          >
            {error.message}
          </Text>
          <Text centered color="supporting" size={14}>
            Nothing helps? Email us at <br />
            <CopyText color="regular" as="span" content={supportEmail}>
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
