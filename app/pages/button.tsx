import type { NextPage } from 'next'
import { HStack, VStack } from '@reactkit/ui/ui/Stack'
import { DemoPage } from 'components/DemoPage'
import {
  Button,
  buttonKinds,
  buttonSizes,
} from '@reactkit/ui/ui/buttons/Button'
import { TitledSection } from '@reactkit/ui/ui/Layout/TitledSection'
import { Navigation } from 'navigation'

const ButtonPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage youtubeVideoId="D2AmZCuk18Q" title="Button">
        <VStack gap={40}>
          <TitledSection title="Button kinds">
            <HStack gap={40} wrap="wrap">
              {buttonKinds.map((kind) => (
                <Button key={kind} kind={kind}>
                  Submit
                </Button>
              ))}
            </HStack>
          </TitledSection>
          <TitledSection title="Button sizes">
            <HStack alignItems="center" gap={20} wrap="wrap">
              {buttonSizes.map((size) => (
                <Button kind="reversed" key={size} size={size}>
                  Submit
                </Button>
              ))}
            </HStack>
          </TitledSection>
          <TitledSection title="Button states">
            <HStack alignItems="center" gap={20} wrap="wrap">
              <Button isLoading>Submit</Button>
              <Button isDisabled="Not enough funds">Submit</Button>
            </HStack>
          </TitledSection>
        </VStack>
      </DemoPage>
    </Navigation>
  )
}

export default ButtonPage
