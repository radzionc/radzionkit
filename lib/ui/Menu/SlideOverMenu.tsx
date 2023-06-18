import { ReactNode, useState } from 'react'
import { BottomSlideOver, BottomSlideOverProps } from '../BottomSlideOver'

interface RenderOpenerProps {
  onClick: () => void
}

interface RenderContentParams {
  onClose: () => void
}

type SlideOverMenuProps = Pick<BottomSlideOverProps, 'title'> & {
  renderOpener: (props: RenderOpenerProps) => ReactNode
  renderContent: (params: RenderContentParams) => ReactNode
}

export const SlideOverMenu = ({
  renderOpener,
  title,
  renderContent,
}: SlideOverMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {renderOpener({ onClick: () => setIsOpen(true) })}
      {isOpen && (
        <BottomSlideOver onClose={() => setIsOpen(false)} title={title}>
          {renderContent({ onClose: () => setIsOpen(false) })}
        </BottomSlideOver>
      )}
    </>
  )
}
