export interface BeforeInstallPromptEvent extends Event {
  /** Platforms on which the event was dispatched */
  readonly platforms: string[]
  /** Returns a Promise that resolves to a user choice result */
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  /** Allows a developer to show the install prompt at a time of their own choosing */
  prompt(): Promise<void>
}
