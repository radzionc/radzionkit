import { VStack } from '@lib/ui/css/stack'
import { Text } from '../text'
import { AuthView } from './AuthView'
import { suggestInboxLink } from '@lib/utils/suggestInboxLink'
import { ExternalLink } from '../navigation/Link/ExternalLink'
import { Button } from '../buttons/Button'

interface ConfirmEmailAuthViewProps {
  sender?: string
  onBack?: () => void
  email?: string
}

export const ConfirmEmailAuthView = ({
  sender,
  onBack,
  email,
}: ConfirmEmailAuthViewProps) => {
  const inboxLink = email && suggestInboxLink(email, sender)

  return (
    <AuthView title="Confirm your email">
      {email && (
        <>
          <Text height="large" centered size={18}>
            We emailed a magic link to <br />
            <Text as="span" weight="600">
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
