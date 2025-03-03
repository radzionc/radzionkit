import { ReactNode } from 'react'

import { Opener } from '../base/Opener'
import { BasedOnScreenWidth } from '../layout/BasedOnScreenWidth'
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
    <BasedOnScreenWidth
      value={600}
      less={() => (
        <Opener
          renderOpener={({ onOpen, isOpen }) =>
            renderOpener({
              isOpen,
              props: {
                onClick: onOpen,
                ref: () => {},
              },
            })
          }
          renderContent={({ onClose }) => (
            <BottomSlideOver onClose={onClose} title={title}>
              {renderContent({ onClose, view: 'slideover' })}
            </BottomSlideOver>
          )}
        />
      )}
      more={() => (
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
