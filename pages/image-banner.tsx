import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { HStack, VStack } from "lib/ui/Stack"
import { ThemeProvider } from "styled-components"
import { HSLA } from "lib/ui/colors/HSLA"
import { ExternalLink } from "lib/navigation/Link/ExternalLink"
import { ImageBanner } from "lib/ui/ImageBanner"
import { SafeImage } from "lib/ui/SafeImage"
import { YouTubeIcon } from "lib/ui/icons/YouTubeIcon"
import { CoverImage } from "lib/ui/images/CoverImage"
import { darkTheme } from "lib/ui/theme/darkTheme"
import {
  PersistentStorageKey,
  usePersistentStorageValue,
} from "state/persistentStorage"
import { Button } from "lib/ui/buttons/Button"
import { Text } from "lib/ui/Text"

const titleColor = new HSLA(220, 45, 30)

const HABITS_EDUCATION_URL = `https://youtu.be/39gE4G1j-yk`

const ImageBannerPage: NextPage = () => {
  const [interactionDate, setInteractionDate] = usePersistentStorageValue<
    number | undefined
  >(PersistentStorageKey.HabitsEducationWasAt, undefined)

  const handleInteraction = () => {
    setInteractionDate(Date.now())
  }

  return (
    <DemoPage title="Image Banner">
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
                src="/mountains.webp"
                render={(props) => <CoverImage {...props} />}
              />
            }
          />
        </ThemeProvider>

        <Text>
          Last interaction:{" "}
          {interactionDate ? new Date(interactionDate).toUTCString() : "-"}
        </Text>
      </VStack>
    </DemoPage>
  )
}

export default ImageBannerPage
