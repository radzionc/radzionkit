import { HStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { match } from '@lib/utils/match'

import { CalculationState } from './CalculationState'
import { InputItem } from './InputItem'
import { useAppViewState } from './navigation/hooks/useAppViewState'

const calculateResult = ({ inputs, operation }: CalculationState): number => {
  return match(operation, {
    sum: () => inputs.reduce((sum, num) => sum + num, 0),
    subtract: () =>
      inputs.reduce(
        (result, num, index) => (index === 0 ? num : result - num),
        0,
      ),
    multiply: () => inputs.reduce((product, num) => product * num, 1),
    divide: () =>
      inputs.reduce(
        (result, num, index) => (index === 0 ? num : result / num),
        0,
      ),
  })
}

export const ResultView = () => {
  const [state] = useAppViewState<'result'>()
  const result = calculateResult(state)

  return (
    <>
      <HStack alignItems="center" gap={8} justifyContent="space-between">
        <Text>Operation:</Text>
        {capitalizeFirstLetter(state.operation)}
      </HStack>

      <HStack alignItems="center" gap={8} justifyContent="space-between">
        <Text>Inputs:</Text>
        <HStack alignItems="center" gap={8}>
          {state.inputs.map((input, index) => (
            <InputItem key={index} index={index} value={input} />
          ))}
        </HStack>
      </HStack>

      <HStack alignItems="center" gap={8} justifyContent="space-between">
        <Text>Result:</Text>
        {result.toFixed(2)}
      </HStack>
    </>
  )
}
