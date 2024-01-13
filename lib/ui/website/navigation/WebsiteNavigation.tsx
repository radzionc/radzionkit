import styled from 'styled-components'
import { ClosableComponentProps, ComponentWithChildrenProps } from '../../props'
import { takeWholeSpace } from '../../css/takeWholeSpace'
import { HStack, VStack } from '../../layout/Stack'
import { ReactNode, useEffect, useState } from 'react'
import { useIsScreenWidthLessThan } from '../../hooks/useIsScreenWidthLessThan'
import { centeredContentColumn } from '../../css/centeredContentColumn'
import { websiteConfig } from '../config'
import { getColor } from '../../theme/getters'
import { IconButton } from '../../buttons/IconButton'
import { CloseIcon } from '../../icons/CloseIcon'
import { MenuIcon } from '../../icons/MenuIcon'
import { toSizeUnit } from '../../css/toSizeUnit'
import { verticalPadding } from '../../css/verticalPadding'

type WebsiteNavigationProps = ComponentWithChildrenProps & {
  logo: ReactNode
  renderTopbarItems: () => ReactNode
  renderOverlayItems: (props: ClosableComponentProps) => ReactNode
  footer?: ReactNode
}

const Wrapper = styled(VStack)`
  ${takeWholeSpace};
`

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

export const WebsiteNavigation = ({
  children,
  logo,
  renderOverlayItems,
  renderTopbarItems,
  footer,
}: WebsiteNavigationProps) => {
  const isSmallScreen = useIsScreenWidthLessThan(800)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  useEffect(() => {
    if (!isSmallScreen && isOverlayOpen) {
      setIsOverlayOpen(false)
    }
  }, [isOverlayOpen, isSmallScreen])

  return (
    <>
      <Wrapper>
        <Header>
          <HStack fullWidth alignItems="center" gap={20}>
            {logo}
            <TobbarContent>
              {isSmallScreen ? (
                <>
                  <div />
                  <IconButton
                    size="l"
                    onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                    title={
                      isOverlayOpen ? 'Close navigation' : 'Open navigation'
                    }
                    icon={isOverlayOpen ? <CloseIcon /> : <MenuIcon />}
                  />
                </>
              ) : (
                <TobbarContent>{renderTopbarItems()}</TobbarContent>
              )}
            </TobbarContent>
          </HStack>
        </Header>
        <Container>
          <Content>{children}</Content>
          {footer}
        </Container>
      </Wrapper>
      {isOverlayOpen && (
        <Overlay>
          {renderOverlayItems({
            onClose: () => setIsOverlayOpen(false),
          })}
        </Overlay>
      )}
    </>
  )
}
