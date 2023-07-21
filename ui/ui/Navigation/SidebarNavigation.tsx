import { Topbar } from './Topbar'
import styled, { css } from 'styled-components'
import { useIsScreenWidthLessThan } from 'ui/hooks/useIsScreenWidthLessThan'
import { HStack, VStack } from 'ui/Stack'
import { Sidebar } from './Sidebar'
import { ReactNode } from 'react'
import { ThemeToggleButton } from '../theme/ThemeToggleButton'

interface Props {
  children: ReactNode
  renderNavigation: () => ReactNode
  logo: ReactNode
}

const SMALL_SCREEN_BREAKPOINT = 900

const ScreenWidthSidebar = styled(HStack)`
  max-height: 100%;
`

const contentCSS = css`
  max-height: 100%;
  overflow: auto;
  height: 100%;
  width: 100%;
`

const ScreenWidthTopbarContent = styled.div`
  ${contentCSS}
  padding: 0 20px;
`

const ScreenWidthSidebarContent = styled(VStack)`
  ${contentCSS}
  padding: 40px 4% 20px 4%;
`

const Header = styled(HStack)`
  padding-left: 16px;
`

export const SidebarNavigation = ({
  children,
  renderNavigation,
  logo,
}: Props) => {
  const isSmallScreen = useIsScreenWidthLessThan(SMALL_SCREEN_BREAKPOINT)

  const renderSidebar = () => {
    return (
      <Sidebar>
        <VStack fullWidth gap={20}>
          <Header alignItems="center" justifyContent="space-between">
            {logo}
            <ThemeToggleButton />
          </Header>
          {renderNavigation()}
        </VStack>
      </Sidebar>
    )
  }

  if (isSmallScreen) {
    return (
      <VStack fullHeight alignItems="start">
        <Topbar renderSidebar={renderSidebar} />
        <ScreenWidthTopbarContent>{children}</ScreenWidthTopbarContent>
      </VStack>
    )
  }

  return (
    <ScreenWidthSidebar fullHeight alignItems="start">
      {renderSidebar()}
      <ScreenWidthSidebarContent alignItems="center">
        {children}
      </ScreenWidthSidebarContent>
    </ScreenWidthSidebar>
  )
}
