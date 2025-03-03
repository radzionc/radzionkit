import { SidebarNavigation } from '@lib/ui/navigation/SidebarNavigation'
import { ChildrenProp } from '@lib/ui/props'

import { Logo } from './Logo'
import { NavigationItems } from './NavigationItems'

export const Navigation = ({ children }: ChildrenProp) => (
  <SidebarNavigation
    logo={<Logo />}
    renderNavigation={() => <NavigationItems />}
  >
    {children}
  </SidebarNavigation>
)
