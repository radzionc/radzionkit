import { createContextHook } from '@lib/ui/state/createContextHook'
import { createContext } from 'react'

import { Interval } from '@lib/utils/interval/Interval'

export const CurrentIntervalContext = createContext<Interval | undefined>(
  undefined,
)

export const useCurrentInterval = createContextHook(
  CurrentIntervalContext,
  'CurrentInterval',
)
