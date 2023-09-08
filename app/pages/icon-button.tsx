import type { NextPage } from 'next'
import { HStack, VStack } from '@reactkit/ui/ui/Stack'
import { DemoPage } from 'components/DemoPage'
import { TitledSection } from '@reactkit/ui/ui/Layout/TitledSection'
import {
  IconButton,
  iconButtonKinds,
  iconButtonSizes,
} from '@reactkit/ui/ui/buttons/IconButton'
import { SettingsIcon } from '@reactkit/ui/ui/icons/SettingsIcon'
import { Navigation } from 'navigation'

const IconButtonPage: NextPage = () => {
  const icon = <SettingsIcon />
  return (
    <Navigation>
      <DemoPage title="Icon Button" youtubeVideoId="zliCty-G8nA">
        <VStack gap={40}>
          <TitledSection title="Button kinds">
            <HStack gap={40} wrap="wrap">
              {iconButtonKinds.map((kind) => (
                <IconButton
                  title="Settings"
                  icon={icon}
                  key={kind}
                  kind={kind}
                />
              ))}
            </HStack>
          </TitledSection>
          <TitledSection title="Button sizes">
            <HStack alignItems="center" gap={20} wrap="wrap">
              {iconButtonSizes.map((size) => (
                <IconButton
                  title="Settings"
                  icon={icon}
                  key={size}
                  size={size}
                />
              ))}
            </HStack>
          </TitledSection>
        </VStack>
      </DemoPage>
    </Navigation>
  )
}

export default IconButtonPage
