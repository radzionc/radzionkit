import { DemoPage } from 'components/DemoPage'
import { OpenMenuButton } from '@radzionkit/ui/buttons/OpenMenuButton'
import { EditIcon } from '@radzionkit/ui/icons/EditIcon'
import { MoonIcon } from '@radzionkit/ui/icons/MoonIcon'
import { TrashBinIcon } from '@radzionkit/ui/icons/TrashBinIcon'
import { Menu } from '@radzionkit/ui/menu'
import { MenuOption, MenuOptionProps } from '@radzionkit/ui/menu/MenuOption'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="dW9nVeeVc20" title="Menu">
      <div style={{ maxWidth: 320, width: '100%' }}>
        <Menu
          title="Manage project"
          renderOpener={({ ref, ...props }) => (
            <OpenMenuButton ref={ref} {...props} />
          )}
          renderContent={({ view, onClose }) => {
            const options: MenuOptionProps[] = [
              {
                text: 'Edit project',
                onSelect: () => {
                  console.log('Edit project')
                  onClose()
                },
                icon: <EditIcon />,
              },
              {
                text: 'Make project inactive',
                onSelect: () => {
                  console.log('Make project inactive')
                  onClose()
                },
                icon: <MoonIcon />,
              },
              {
                icon: <TrashBinIcon />,
                text: 'Delete project',
                kind: 'alert',
                onSelect: () => {
                  console.log('Delete project')
                  onClose()
                },
              },
            ]

            return options.map((props, index) => (
              <MenuOption view={view} key={index} {...props} />
            ))
          }}
        />
      </div>
    </DemoPage>
  )
})
