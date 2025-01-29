import { ChildrenProp, NameProp } from '../../props'
import { ShyWarningBlock } from '../../status/ShyWarningBlock'
import { useNotificationPermission } from '../hooks/useNotificationPermission'

export const NonDeniedOnly = ({ children, name }: ChildrenProp & NameProp) => {
  const permission = useNotificationPermission()

  if (permission === 'denied') {
    return (
      <ShyWarningBlock title={`Enable browser notifications`}>
        To receive {name} notifications, please enable browser notifications.
      </ShyWarningBlock>
    )
  }

  return <>{children}</>
}
