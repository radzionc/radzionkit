import { useNavigate } from '@lib/navigation/hooks/useNavigate'

import { AppView } from '../AppView'

export function useAppNavigate() {
  return useNavigate<AppView>()
}
