import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { OpenMenuButton } from "@reactkit/ui/ui/buttons/OpenMenuButton"
import { EditIcon } from "@reactkit/ui/ui/icons/EditIcon"
import { MoonIcon } from "@reactkit/ui/ui/icons/MoonIcon"
import { TrashBinIcon } from "@reactkit/ui/ui/icons/TrashBinIcon"
import { Menu } from "@reactkit/ui/ui/Menu"
import { MenuOption, MenuOptionProps } from "@reactkit/ui/ui/Menu/MenuOption"

const MenuPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="dW9nVeeVc20" title="Menu">
      <div style={{ maxWidth: 320, width: "100%" }}>
        <Menu
          title="Manage project"
          renderOpener={({ ref, ...props }) => (
            <OpenMenuButton ref={ref} {...props} />
          )}
          renderContent={({ view, onClose }) => {
            const options: MenuOptionProps[] = [
              {
                text: "Edit project",
                onSelect: () => {
                  console.log("Edit project")
                  onClose()
                },
                icon: <EditIcon />,
              },
              {
                text: "Make project inactive",
                onSelect: () => {
                  console.log("Make project inactive")
                  onClose()
                },
                icon: <MoonIcon />,
              },
              {
                icon: <TrashBinIcon />,
                text: "Delete project",
                kind: "alert",
                onSelect: () => {
                  console.log("Delete project")
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
}

export default MenuPage
