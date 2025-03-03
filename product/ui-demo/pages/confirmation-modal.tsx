import { Opener } from '@lib/ui/base/Opener'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { ShyTextButton } from '@lib/ui/buttons/ShyTextButton'
import { VStack } from '@lib/ui/css/stack'
import { TrashBinIcon } from '@lib/ui/icons/TrashBinIcon'
import { ConfirmationModal } from '@lib/ui/modal/ConfirmationModal'
import { Text } from '@lib/ui/text'

import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
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
          >
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
                >
                  make it inactive.
                </ShyTextButton>
              </Text>
            </VStack>
          </ConfirmationModal>
        )}
      />
    </DemoPage>
  )
})
