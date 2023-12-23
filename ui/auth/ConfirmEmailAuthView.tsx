import { VStack } from '../layout/Stack'
import { Text } from '../text'
import { useState } from 'react'
import { AuthView } from './AuthView'
import { useHandleQueryParams } from '../navigation/hooks/useHandleQueryParams'
import { suggestInboxLink } from '@radzionkit/utils/suggestInboxLink'
import { ExternalLink } from '../navigation/Link/ExternalLink'
import { Button } from '../buttons/Button'

interface EmailConfirmQueryParams {
  email: string
}

interface ConfirmEmailAuthViewProps {
  sender?: string
  onBack?: () => void
}

export const ConfirmEmailAuthView = ({
  sender,
  onBack,
}: ConfirmEmailAuthViewProps) => {
  const [email, setEmail] = useState<string | undefined>()
  useHandleQueryParams<EmailConfirmQueryParams>(({ email }) => setEmail(email))

  const inboxLink = email && suggestInboxLink(email, sender)

  return (
    <AuthView title="Confirm your email">
      {email && (
        <>
          <Text height="large" centered size={18}>
            We emailed a magic link to <br />
            <Text as="span" weight="bold">
              {email}
            </Text>
            <br />
            Click the link to log in or sign up.
          </Text>

          <VStack gap={4} fullWidth>
            {inboxLink && (
              <ExternalLink style={{ width: '100%' }} to={inboxLink}>
                <Button size="xl" as="div">
                  Check your inbox
                </Button>
              </ExternalLink>
            )}
            <Button onClick={onBack} size="xl" kind="ghostSecondary">
              Back
            </Button>
          </VStack>
        </>
      )}
    </AuthView>
  )
}
