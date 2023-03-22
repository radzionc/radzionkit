import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { OverlayMenu } from "lib/ui/Menu/OverlayMenu";
import { OpenMenuButton } from "lib/ui/buttons/square/OpenMenuButton";
import { EditIcon } from "lib/ui/icons/EditIcon";
import { MoonIcon } from "lib/ui/icons/MoonIcon";
import { TrashBinIcon } from "lib/ui/icons/TrashBinIcon";

const MenuPage: NextPage = () => {
  return (
    <DemoPage title="Popover Menu">
      <div style={{ maxWidth: 320, width: "100%" }}>
        <OverlayMenu
          title="Manage project"
          renderOpener={({ ref, ...props }) => (
            <OpenMenuButton ref={ref} {...props} />
          )}
          options={[
            {
              text: "Edit project",
              onSelect: () => console.log("Edit project"),
              icon: <EditIcon />,
            },
            {
              text: "Make project inactive",
              onSelect: () => console.log("Make project inactive"),
              icon: <MoonIcon />,
            },
            {
              icon: <TrashBinIcon />,
              text: "Delete project",
              kind: "alert",
              onSelect: () => console.log("Delete project"),
            },
          ]}
        />
      </div>
    </DemoPage>
  );
};

export default MenuPage;
