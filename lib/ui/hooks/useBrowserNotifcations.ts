import { useEffect, useState } from 'react'

export const getBrowserNotificationsPermission = () =>
  window?.Notification?.permission

export const useBrowserNotifications = () => {
  const [permission, setPermission] = useState(
    getBrowserNotificationsPermission,
  )

  useEffect(() => {
    if ('permissions' in navigator) {
      navigator.permissions
        .query({ name: 'notifications' })
        .then((permission) => {
          permission.onchange = () => {
            setPermission(getBrowserNotificationsPermission())
          }
        })
    }
  })

  return {
    permission,
  }
}
