import { ReactNode } from 'react'

export interface FlowStep<K extends string> {
  id: K
}

type StepHandlers<K extends string, T extends FlowStep<K>> = {
  [key in T['id']]: (step: Extract<T, { id: key }>) => ReactNode
}

type FlowProps<K extends string, T extends FlowStep<K>> = {
  step: T
  steps: StepHandlers<K, T>
}

export function Flow<K extends string, T extends FlowStep<K>>({
  step,
  steps,
}: FlowProps<K, T>) {
  const id = step.id
  const render = steps[id]

  return <>{render(step as Extract<T, { id: K }>)}</>
}
