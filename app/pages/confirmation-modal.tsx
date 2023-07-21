import { DemoPage } from 'components/DemoPage'
import { ConfirmationModal } from '@reactkit/ui/ui/Modal/ConfirmationModal'
import { Opener } from '@reactkit/ui/ui/Opener'
import { VStack } from '@reactkit/ui/ui/Stack'
import { Text } from '@reactkit/ui/ui/Text'
import { ShyTextButton } from '@reactkit/ui/ui/buttons/ShyTextButton'
import { IconButton } from '@reactkit/ui/ui/buttons/IconButton'
import { TrashBinIcon } from '@reactkit/ui/ui/icons/TrashBinIcon'
import type { NextPage } from 'next'

const ConfirmationModalPage: NextPage = () => {
  return (
    <DemoPage title="Confirmation Modal" youtubeVideoId="S_i04MKYfxk">
      <Opener
        renderOpener={({ onOpen }) => (
          <IconButton
            title="Delete"
            kind="alert"
            icon={<TrashBinIcon />}
            onClick={onOpen}
          />
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
}

export default ConfirmationModalPage
