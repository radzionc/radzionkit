import { memoize } from '@radzionkit/utils/memoize'

export const getScriptBySrc = (src: string) =>
  document.querySelectorAll(`script[src="${src}"]`)[0] as
    | HTMLScriptElement
    | undefined

export const loadScript = memoize((script: HTMLScriptElement) => {
  return new Promise((resolve, reject) => {
    script.onload = resolve
    script.onerror = reject
  })
})

export const createScript = (src: string) => {
  const script = document.createElement('script')
  script.src = src
  script.async = true

  return document.body.appendChild(script)
}
