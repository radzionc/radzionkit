import { getStateProviderSetup } from '@lib/ui/state/getStateProviderSetup'

export const { useState: useActiveItemId, provider: ActiveItemIdProvider } =
  getStateProviderSetup<string | null>('ActiveItemId')
