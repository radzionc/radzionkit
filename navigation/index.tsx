import { ComponentWithChildrenProps } from 'lib/shared/props'
import { SidebarNavigation } from 'lib/ui/Navigation/SidebarNavigation'
import { Logo } from './Logo'
import { NavigationItems } from './NavigationItems'

export const Navigation = ({ children }: ComponentWithChildrenProps) => (
  <SidebarNavigation
    logo={<Logo />}
    renderNavigation={() => <NavigationItems />}
  >
    {children}
  </SidebarNavigation>
)
