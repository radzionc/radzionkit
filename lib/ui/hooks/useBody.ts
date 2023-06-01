import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'

export function useBody() {
  const [body, setBody] = useState<HTMLBodyElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    setBody(document.body as HTMLBodyElement)
  })

  return body
}
