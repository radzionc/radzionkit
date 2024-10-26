import { RefObject, useEffect, useState } from 'react'

type UseIntersectionParams = Pick<
  IntersectionObserverInit,
  'root' | 'rootMargin' | 'threshold'
>

export const useIntersection = (
  ref: RefObject<HTMLElement>,
  { root, rootMargin, threshold }: UseIntersectionParams,
): IntersectionObserverEntry | null => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0])
      }

      const observer = new IntersectionObserver(handler, {
        root,
        rootMargin,
        threshold,
      })
      observer.observe(ref.current)

      return () => {
        setIntersectionObserverEntry(null)
        observer.disconnect()
      }
    }
  }, [root, rootMargin, threshold, ref])

  return intersectionObserverEntry
}
