import { HStack, VStack } from '@lib/ui/css/stack'
import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'

import { IconButton } from '../../buttons/IconButton'
import { centeredContentColumn } from '../../css/centeredContentColumn'
import { takeWholeSpace } from '../../css/takeWholeSpace'
import { toSizeUnit } from '../../css/toSizeUnit'
import { verticalPadding } from '../../css/verticalPadding'
import { useIsScreenWidthLessThan } from '../../hooks/useIsScreenWidthLessThan'
import { CloseIcon } from '../../icons/CloseIcon'
import { MenuIcon } from '../../icons/MenuIcon'
import { OnCloseProp } from '../../props'
import { getColor } from '../../theme/getters'
import { websiteConfig } from '../config'

const Wrapper = styled(VStack)`
  width: 100%;
  min-height: 100%;
`

type WebsiteNavigationProps = ComponentProps<typeof Wrapper> & {
  logo: ReactNode
  renderTopbarItems?: () => ReactNode
  renderOverlayItems?: (props: OnCloseProp) => ReactNode
  footer?: ReactNode
}

const Container = styled(VStack)`
  max-height: 100%;
  overflow: auto;
  ${takeWholeSpace};
`

const Header = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: websiteConfig.contentMaxWidth,
  })}
  height: ${toSizeUnit(websiteConfig.headerHeight)};
  min-height: ${toSizeUnit(websiteConfig.headerHeight)};
`

const TobbarContent = styled(HStack)`
  flex: 1;
  justify-content: space-between;
`

const Overlay = styled(VStack)`
  position: fixed;
  width: 100%;
  height: calc(100% - ${toSizeUnit(websiteConfig.headerHeight)});
  top: ${toSizeUnit(websiteConfig.headerHeight)};
  background: ${getColor('background')};
  ${verticalPadding(20)};
  gap: 4px;
  z-index: 1;
`

const Content = styled.div`
  flex: 1;
`

export function WebsiteNavigation({
  children,
  logo,
  renderOverlayItems,
  renderTopbarItems,
  footer,
  ...rest
}: WebsiteNavigationProps) {
  const isSmallScreen = useIsScreenWidthLessThan(800)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  useEffect(() => {
    if (!isSmallScreen && isOverlayOpen) {
      setIsOverlayOpen(false)
    }
  }, [isOverlayOpen, isSmallScreen])

  return (
    <>
      <Wrapper {...rest}>
        <Header>
          <HStack fullWidth alignItems="center" gap={40}>
            {logo}
            <TobbarContent>
              {isSmallScreen ? (
                <>
                  <div />
                  {renderOverlayItems && (
                    <IconButton
                      size="l"
                      onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                      title={
                        isOverlayOpen ? 'Close navigation' : 'Open navigation'
                      }
                      icon={isOverlayOpen ? <CloseIcon /> : <MenuIcon />}
                    />
                  )}
                </>
              ) : (
                <TobbarContent>{renderTopbarItems?.()}</TobbarContent>
              )}
            </TobbarContent>
          </HStack>
        </Header>
        <Container>
          <Content>{children}</Content>
          {footer}
        </Container>
      </Wrapper>
      {isOverlayOpen && renderOverlayItems && (
        <Overlay>
          {renderOverlayItems({
            onClose: () => setIsOverlayOpen(false),
          })}
        </Overlay>
      )}
    </>
  )
}
