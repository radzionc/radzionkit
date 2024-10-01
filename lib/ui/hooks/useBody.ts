import { useState } from 'react'
import { useIsomorphicLayoutEffect } from '@lib/ui/hooks/useIsomorphicLayoutEffect'

export function useBody() {
  const [body, setBody] = useState<HTMLBodyElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    setBody(document.body as HTMLBodyElement)
  }, [])

  return body
}
