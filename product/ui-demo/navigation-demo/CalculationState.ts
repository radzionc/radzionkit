export const calculationOperations = [
  'sum',
  'subtract',
  'multiply',
  'divide',
] as const
export type CalculationOperation = (typeof calculationOperations)[number]

export type CalculationState = {
  inputs: number[]
  operation: CalculationOperation
}
