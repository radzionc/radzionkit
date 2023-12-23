import { HStack, VStack } from '@radzionkit/ui/layout/Stack'
import { DemoPage } from 'components/DemoPage'
import { Button, buttonKinds, buttonSizes } from '@radzionkit/ui/buttons/Button'
import { TitledSection } from '@radzionkit/ui/layout/TitledSection'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
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
  )
})
