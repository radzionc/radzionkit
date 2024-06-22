import { getStateProviderSetup } from '../state/getStateProviderSetup'

export const {
  useState: useActiveItemIndex,
  provider: ActiveItemIndexProvider,
} = getStateProviderSetup<number | null>('ActiveItemIndex')
