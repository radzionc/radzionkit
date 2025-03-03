import { useState, useEffect } from 'react'

import { listenForNotificationPermissionChange } from '../utils/listenForNotificationPermissionChange'

export function useNotificationPermission(): NotificationPermission {
  const [permission, setPermission] = useState<NotificationPermission>(
    Notification.permission,
  )

  useEffect(() => listenForNotificationPermissionChange(setPermission), [])

  return permission
}
