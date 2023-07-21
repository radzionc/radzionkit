import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { HStack, VStack } from "@reactkit/ui/ui/Stack"
import { ThemeProvider } from "styled-components"
import { HSLA } from "@reactkit/ui/ui/colors/HSLA"
import { ExternalLink } from "@reactkit/ui/navigation/Link/ExternalLink"
import { ImageBanner } from "@reactkit/ui/ui/ImageBanner"
import { SafeImage } from "@reactkit/ui/ui/SafeImage"
import { YouTubeIcon } from "@reactkit/ui/ui/icons/YouTubeIcon"
import { CoverImage } from "@reactkit/ui/ui/images/CoverImage"
import { darkTheme } from "@reactkit/ui/ui/theme/darkTheme"
import {
  PersistentStorageKey,
  usePersistentStorageValue,
} from "state/persistentStorage"
import { Button } from "@reactkit/ui/ui/buttons/Button"
import { Text } from "@reactkit/ui/ui/Text"

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
