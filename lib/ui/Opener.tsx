import { ReactNode } from 'react'
import { useBoolean } from 'lib/shared/hooks/useBoolean'
import { ClosableComponentProps } from 'lib/shared/props'

interface RenderOpenerParams {
  isOpen: boolean
  onOpen: () => void
}

interface Props {
  renderOpener: (params: RenderOpenerParams) => ReactNode
  renderContent: (params: ClosableComponentProps) => ReactNode
}

export const Opener = ({ renderOpener, renderContent }: Props) => {
  const [isOpen, { set: onOpen, unset: onClose }] = useBoolean(false)

  return (
    <>
      {isOpen && renderContent({ onClose })}
      {renderOpener({ onOpen, isOpen })}
    </>
  )
}
