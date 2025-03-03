import { ReactNode } from 'react'

import { useBoolean } from '../hooks/useBoolean'
import { OnCloseProp } from '../props'

interface RenderOpenerParams {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

type OpenerProps = {
  initialIsOpen?: boolean
  renderOpener: (params: RenderOpenerParams) => ReactNode
  renderContent: (params: OnCloseProp) => ReactNode
}

export const Opener = ({
  renderOpener,
  renderContent,
  initialIsOpen = false,
}: OpenerProps) => {
  const [isOpen, { set: onOpen, unset: onClose }] = useBoolean(initialIsOpen)

  return (
    <>
      {renderOpener({ onOpen, onClose, isOpen })}
      {isOpen && renderContent({ onClose })}
    </>
  )
}
