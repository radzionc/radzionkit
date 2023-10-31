import { supportEmail } from '@reactkit/entities'
import { CopyText } from '../../ui/CopyText'
import { Spinner } from '../../ui/Spinner'
import { VStack } from '../../layout/Stack'
import { Text } from '../../ui/Text'
import { InfoIcon } from '../../ui/icons/InfoIcon'

interface BlockingQueryProps {
  error?: Error | null
}

export const BlockingQuery = ({ error }: BlockingQueryProps) => {
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
