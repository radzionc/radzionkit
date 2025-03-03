import { OpenMenuButton } from '@lib/ui/buttons/OpenMenuButton'
import { EditIcon } from '@lib/ui/icons/EditIcon'
import { MoonIcon } from '@lib/ui/icons/MoonIcon'
import { TrashBinIcon } from '@lib/ui/icons/TrashBinIcon'
import { Menu } from '@lib/ui/menu'
import { MenuOption, MenuOptionProps } from '@lib/ui/menu/MenuOption'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="dW9nVeeVc20" title="Menu">
      <div style={{ maxWidth: 320, width: '100%' }}>
        <Menu
          title="Manage project"
          renderOpener={({ props: { ref, ...props } }) => (
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
