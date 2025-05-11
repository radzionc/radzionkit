import { CalculationState } from '../CalculationState'

export type AppView =
  | {
      id: 'home'
      state: CalculationState
    }
  | {
      id: 'settings'
    }
  | {
      id: 'result'
      state: CalculationState
    }

export type AppViewId = AppView['id']

export const initialView: AppView = {
  id: 'home',
  state: {
    inputs: [5, 3],
    operation: 'sum',
  },
}
