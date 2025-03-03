import { createContextHook } from '@lib/ui/state/createContextHook'
import { Interval } from '@lib/utils/interval/Interval'
import { createContext } from 'react'

export const CurrentIntervalContext = createContext<Interval | undefined>(
  undefined,
)

export const useCurrentInterval = createContextHook(
  CurrentIntervalContext,
  'CurrentInterval',
)
