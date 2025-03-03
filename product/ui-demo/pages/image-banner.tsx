import { Button } from '@lib/ui/buttons/Button'
import { HSLA } from '@lib/ui/colors/HSLA'
import { HStack, VStack } from '@lib/ui/css/stack'
import { YouTubeIcon } from '@lib/ui/icons/YouTubeIcon'
import { CoverImage } from '@lib/ui/images/CoverImage'
import { ImageBanner } from '@lib/ui/images/ImageBanner'
import { SafeImage } from '@lib/ui/images/SafeImage'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { Text } from '@lib/ui/text'
import { darkTheme } from '@lib/ui/theme/darkTheme'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import {
  PersistentStateKey,
  usePersistentState,
} from '@product/ui-demo/state/persistentState'
import { ThemeProvider } from 'styled-components'

const titleColor = new HSLA(220, 45, 30)

const HABITS_EDUCATION_URL = `https://youtu.be/39gE4G1j-yk`

export default makeDemoPage(() => {
  const [interactionDate, setInteractionDate] = usePersistentState<
    number | null
  >(PersistentStateKey.HabitsEducationWasAt, null)

  const handleInteraction = () => {
    setInteractionDate(Date.now())
  }

  return (
    <DemoPage title="Image Banner" youtubeVideoId="BcQ05BR5Pgw">
      <VStack fullWidth gap={40}>
        <ThemeProvider theme={darkTheme}>
          <ImageBanner
            onClose={handleInteraction}
            action={
              <Button size="xl" kind="reversed" as="div">
                <HStack alignItems="center" gap={8}>
                  <YouTubeIcon />
                  <Text>Watch now</Text>
                </HStack>
              </Button>
            }
            title={
              <Text as="span" style={{ color: titleColor.toCssValue() }}>
                learn to build better habits
              </Text>
            }
            renderInteractiveArea={(props) => (
              <ExternalLink
                onClick={handleInteraction}
                to={HABITS_EDUCATION_URL}
                {...props}
              />
            )}
            image={
              <SafeImage
                src="images/mountains.webp"
                render={(props) => <CoverImage {...props} />}
              />
            }
          />
        </ThemeProvider>

        <Text>
          Last interaction:{' '}
          {interactionDate ? new Date(interactionDate).toUTCString() : '-'}
        </Text>
      </VStack>
    </DemoPage>
  )
})
