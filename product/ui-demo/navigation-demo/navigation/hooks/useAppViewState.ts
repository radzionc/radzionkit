import { useViewState } from '@lib/navigation/hooks/useViewState'

import { AppView } from '../AppView'

type AppViewWithState = Extract<AppView, { state: any }>
type AppViewWithStateId = AppViewWithState['id']
type AppViewStateMap = {
  [K in AppViewWithStateId]: Extract<AppView, { id: K }>['state']
}

export function useAppViewState<P extends AppViewWithStateId>() {
  return useViewState<AppViewStateMap[P]>()
}
