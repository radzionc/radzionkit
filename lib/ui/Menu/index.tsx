import { ReactNode } from 'react'

import { PopoverMenu, PopoverMenuProps } from './PopoverMenu'
import { SlideOverMenu } from './SlideOverMenu'
import { ResponsiveView } from '../ResponsiveView'

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
        <SlideOverMenu
          title={title}
          renderOpener={(props) => {
            return renderOpener({
              onClick: () => props.onClick(),
              ref: () => { },
            })
          }}
          renderContent={({ onClose }) =>
            renderContent({ view: 'slideover', onClose })
          }
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
