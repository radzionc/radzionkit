import { ComponentWithChildrenProps } from "lib/shared/props";
import { SidebarNavigation } from "lib/ui/Navigation/SidebarNavigation";
import { NavigationItems } from "./NavigationItems";

export const Navigation = ({ children }: ComponentWithChildrenProps) => (
  <SidebarNavigation renderNavigation={() => <NavigationItems />}>
    {children}
  </SidebarNavigation>
);
