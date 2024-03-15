import { ReactNode } from 'react'
import { useBoolean } from '../hooks/useBoolean'
import { ClosableComponentProps } from '../props'

interface RenderOpenerParams {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface Props {
  defaultIsOpen?: boolean
  renderOpener: (params: RenderOpenerParams) => ReactNode
  renderContent: (params: ClosableComponentProps) => ReactNode
}

export const Opener = ({
  renderOpener,
  renderContent,
  defaultIsOpen = false,
}: Props) => {
  const [isOpen, { set: onOpen, unset: onClose }] = useBoolean(defaultIsOpen)

  return (
    <>
      {renderOpener({ onOpen, onClose, isOpen })}
      {isOpen && renderContent({ onClose })}
    </>
  )
}
