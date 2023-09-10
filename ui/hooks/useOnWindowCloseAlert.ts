import { useEffect } from 'react'

export const useOnWindowCloseAlert = (message: string, isEnabled = true) => {
  useEffect(() => {
    if (!isEnabled) return

    const onUnload = (event: any) => {
      event.returnValue = message
      return message
    }

    window.addEventListener('beforeunload', onUnload)

    return () => window.removeEventListener('beforeunload', onUnload)
  }, [isEnabled, message])
}
