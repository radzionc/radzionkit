import { without } from '@lib/utils/array/without'
import { attempt } from '@lib/utils/attempt'
import { memoize } from '@lib/utils/memoize'

type Listener = (permission: NotificationPermission) => void

let listeners: Listener[] = []

const initialize = memoize(async () => {
  const permissionStatus = await navigator.permissions.query({
    name: 'notifications' as PermissionName,
  })

  permissionStatus.onchange = () => {
    listeners.forEach((listener) => {
      listener(permissionStatus.state as NotificationPermission)
    })
  }
})

export const listenForNotificationPermissionChange = (listener: Listener) => {
  listeners.push(listener)

  attempt(initialize)

  return () => {
    listeners = without(listeners, listener)
  }
}
