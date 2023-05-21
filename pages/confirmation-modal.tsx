import { DemoPage } from "components/DemoPage";
import { ConfirmationModal } from "lib/ui/Modal/ConfirmationModal";
import { Opener } from "lib/ui/Opener";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { ShyTextButton } from "lib/ui/buttons/ShyTextButton";
import { IconButton } from "lib/ui/buttons/square/IconButton";
import { TrashBinIcon } from "lib/ui/icons/TrashBinIcon";
import type { NextPage } from "next";

const ConfirmationModalPage: NextPage = () => {
  return (
    <DemoPage title="Confirmation Modal">
      <Opener
        renderOpener={({ onOpen }) => (
          <IconButton kind="alert" icon={<TrashBinIcon />} onClick={onOpen} />
        )}
        renderContent={({ onClose }) => (
          <ConfirmationModal
            title="Delete project"
            onClose={onClose}
            confirmActionText="Delete"
            onConfirm={() => {
              console.log('Delete project')
            }}
            renderContent={() => (
              <VStack gap={12}>
                <Text color="supporting">
                  Are you sure you want to delete{' '}
                  <Text as="span" color="regular">
                    Job?
                  </Text>{' '}
                  This action will remove all the analytics related to the
                  project.
                </Text>
                <Text color="supporting">
                  To keep the data but hide the project from other parts of the
                  app -{' '}
                  <ShyTextButton
                    onClick={() => {
                      console.log('Make project inactive')
                      onClose()
                    }}
                    text="make it inactive."
                  />
                </Text>
              </VStack>
            )}
          />
        )}
      />
    </DemoPage>
  )
};

export default ConfirmationModalPage;
