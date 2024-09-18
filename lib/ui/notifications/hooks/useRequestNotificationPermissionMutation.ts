import { useMutation } from '@tanstack/react-query'

export const useRequestNotificationPermissionMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        throw new Error('User denied notification permission')
      }

      return permission
    },
  })
}
