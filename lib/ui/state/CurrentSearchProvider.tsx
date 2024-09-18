import { getStateProviderSetup } from '@lib/ui/state/getStateProviderSetup'

export const { useState: useCurrentSearch, provider: CurrentSearchProvider } =
  getStateProviderSetup<string>('CurrentSearch')
