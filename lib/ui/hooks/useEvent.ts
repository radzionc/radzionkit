import { useEffect } from 'react'
import { BeforeInstallPromptEvent } from '../pwa/BeforeInstallPromptEvent'

type ExtendedWindowsEventMap = WindowEventMap & {
  beforeinstallprompt: BeforeInstallPromptEvent
  appinstalled: Event
}

export function useEvent<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | null | undefined,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void

export function useEvent<K extends keyof DocumentEventMap>(
  target: Document | null | undefined,
  event: K,
  handler: (ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void

export function useEvent<K extends keyof ExtendedWindowsEventMap>(
  target: Window | null | undefined,
  event: K,
  handler: (ev: ExtendedWindowsEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void

export function useEvent(
  target: EventTarget | null | undefined,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  useEffect(() => {
    if (!target) return

    target.addEventListener(event, handler, options)

    return () => {
      target.removeEventListener(event, handler, options)
    }
  }, [target, event, handler, options])
}
