import { getStateProviderSetup } from '../state/getStateProviderSetup'

export const { useState: useActiveItemId, provider: ActiveItemIdProvider } =
  getStateProviderSetup<string | null>('ActiveItemId')
