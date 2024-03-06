import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

type DisplayMoreOptionsProps = {
  onMoreOptionsRequest: () => void
}

export const DisplayMoreOptions = ({
  onMoreOptionsRequest,
}: DisplayMoreOptionsProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '200px',
    threshold: 0,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      onMoreOptionsRequest()
    }
  }, [intersection?.isIntersecting, onMoreOptionsRequest])

  return <div ref={ref} />
}
