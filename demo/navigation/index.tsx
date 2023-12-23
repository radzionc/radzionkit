import { ComponentWithChildrenProps } from '@radzionkit/ui/props'
import { SidebarNavigation } from '@radzionkit/ui/navigation/SidebarNavigation'
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
