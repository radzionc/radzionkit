import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { OpenMenuButton } from 'lib/ui/buttons/square/OpenMenuButton'
import { EditIcon } from 'lib/ui/icons/EditIcon'
import { MoonIcon } from 'lib/ui/icons/MoonIcon'
import { TrashBinIcon } from 'lib/ui/icons/TrashBinIcon'
import { Menu } from 'lib/ui/Menu'
import { MenuOption, MenuOptionProps } from 'lib/ui/Menu/MenuOption'

const MenuPage: NextPage = () => {
  return (
    <DemoPage title="Menu">
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

            return options.map((props, index) => <MenuOption view={view} key={index} {...props} />)
          }}
        />
      </div>
    </DemoPage>
  )
}

export default MenuPage
