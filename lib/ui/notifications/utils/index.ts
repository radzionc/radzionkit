export const getNotificationPermission = () => window?.Notification?.permission

export const areNotificationsAllowed = () =>
  getNotificationPermission() === 'granted'

export const areNotificationsBlocked = () =>
  getNotificationPermission() === 'denied'

export const showNotification = (text: string) => {
  if (!areNotificationsAllowed()) return

  const notification = new window.Notification(text)
  notification.onclick = function () {
    window.focus()
    notification.close()
  }
}
