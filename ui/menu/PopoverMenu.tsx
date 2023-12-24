import { ReferenceType } from '@floating-ui/react'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { CloseButton } from '../buttons/CloseButton'
import { SeparatedByLine } from '../layout/SeparatedByLine'
import { HStack, VStack } from '../layout/Stack'
import {
  PopoverPanelProps,
  PopoverPanel,
  RenderContentParams,
} from './PopoverPanel'
import { Text } from '../text'

export interface RenderOpenerProps extends Record<string, unknown> {
  ref: (node: ReferenceType | null) => void
}

export interface PopoverMenuProps
  extends Pick<PopoverPanelProps, 'renderContent' | 'renderOpener'> {
  title: ReactNode
}

const Container = styled(PopoverPanel)`
  min-width: 260px;
`

const Header = styled(HStack)`
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`

export const PopoverMenu = ({
  renderContent,
  renderOpener,
  title,
}: PopoverMenuProps) => {
  return (
    <Container
      renderContent={({ onClose }: RenderContentParams) => (
        <SeparatedByLine gap={12}>
          <Header>
            <Text weight="semibold" color="supporting" cropped>
              {title}
            </Text>
            <CloseButton onClick={onClose} />
          </Header>
          <VStack>{renderContent({ onClose })}</VStack>
        </SeparatedByLine>
      )}
      renderOpener={renderOpener}
    />
  )
}
