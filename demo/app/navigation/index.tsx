import { ComponentWithChildrenProps } from '@lib/ui/props'
import { SidebarNavigation } from '@lib/ui/navigation/SidebarNavigation'
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
