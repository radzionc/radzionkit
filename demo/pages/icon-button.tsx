import { HStack, VStack } from '@reactkit/ui/layout/Stack'
import { DemoPage } from 'components/DemoPage'
import {
  IconButton,
  iconButtonKinds,
  iconButtonSizes,
} from '@reactkit/ui/buttons/IconButton'
import { SettingsIcon } from '@reactkit/ui/icons/SettingsIcon'
import { makeDemoPage } from 'layout/makeDemoPage'
import { TitledSection } from '@reactkit/ui/layout/TitledSection'

export default makeDemoPage(() => {
  const icon = <SettingsIcon />
  return (
    <DemoPage title="Icon Button" youtubeVideoId="zliCty-G8nA">
      <VStack gap={40}>
        <TitledSection title="Button kinds">
          <HStack gap={40} wrap="wrap">
            {iconButtonKinds.map((kind) => (
              <IconButton title="Settings" icon={icon} key={kind} kind={kind} />
            ))}
          </HStack>
        </TitledSection>
        <TitledSection title="Button sizes">
          <HStack alignItems="center" gap={20} wrap="wrap">
            {iconButtonSizes.map((size) => (
              <IconButton title="Settings" icon={icon} key={size} size={size} />
            ))}
          </HStack>
        </TitledSection>
      </VStack>
    </DemoPage>
  )
})
