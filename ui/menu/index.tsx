import { ReactNode } from 'react'
import { Opener } from '../base/Opener'
import { ResponsiveView } from '../layout/ResponsiveView'
import { BottomSlideOver } from '../modal/BottomSlideOver'
import { PopoverMenuProps, PopoverMenu } from './PopoverMenu'

export type MenuView = 'popover' | 'slideover'

interface RenderContentParams {
  view: MenuView
  onClose: () => void
}

interface MenuProps extends Pick<PopoverMenuProps, 'title' | 'renderOpener'> {
  renderContent: (params: RenderContentParams) => ReactNode
}

export const Menu = ({ renderOpener, title, renderContent }: MenuProps) => {
  return (
    <ResponsiveView
      small={() => (
        <Opener
          renderOpener={({ onOpen }) =>
            renderOpener({
              onClick: onOpen,
              ref: () => {},
            })
          }
          renderContent={({ onClose }) => (
            <BottomSlideOver onClose={onClose} title={title}>
              {renderContent({ onClose, view: 'slideover' })}
            </BottomSlideOver>
          )}
        />
      )}
      normal={() => (
        <PopoverMenu
          title={title}
          renderOpener={renderOpener}
          renderContent={({ onClose }) =>
            renderContent({ view: 'popover', onClose })
          }
        />
      )}
    />
  )
}
