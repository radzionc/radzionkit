import type { NextPage } from "next"
import { HStack, VStack } from "lib/ui/Stack"
import { DemoPage } from "components/DemoPage"
import { TitledSection } from "lib/ui/Layout/TitledSection"
import {
  IconButton,
  iconButtonKinds,
  iconButtonSizes,
} from "lib/ui/buttons/IconButton"
import { SettingsIcon } from "lib/ui/icons/SettingsIcon"

const IconButtonPage: NextPage = () => {
  const icon = <SettingsIcon />
  return (
    <DemoPage title="Icon Button">
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
}

export default IconButtonPage
