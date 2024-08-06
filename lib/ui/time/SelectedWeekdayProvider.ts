import { getStateProviderSetup } from '@lib/ui/state/getStateProviderSetup'

export const {
  useState: useSelectedWeekday,
  provider: SelectedWeekdayProvider,
} = getStateProviderSetup<number>('SelectedWeekday')
