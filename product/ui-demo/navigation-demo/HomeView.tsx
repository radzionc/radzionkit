import { Button } from '@lib/ui/buttons/Button'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { HStack } from '@lib/ui/css/stack'
import { RefreshIcon } from '@lib/ui/icons/RefreshIcon'
import { GroupedRadioInput } from '@lib/ui/inputs/GroupedRadioInput'
import { Text } from '@lib/ui/text'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { randomIntegerInRange } from '@lib/utils/randomInRange'

import { calculationOperations } from './CalculationState'
import { InputItem } from './InputItem'
import { useAppNavigate } from './navigation/hooks/useAppNavigate'
import { useAppViewState } from './navigation/hooks/useAppViewState'

export const HomeView = () => {
  const [state, setState] = useAppViewState<'home'>()
  const navigate = useAppNavigate()

  return (
    <>
      <GroupedRadioInput
        value={state.operation}
        onChange={(operation) => {
          setState((prev) => ({
            ...prev,
            operation,
          }))
        }}
        options={calculationOperations}
        renderOption={capitalizeFirstLetter}
      />
      <HStack alignItems="center" gap={8} justifyContent="space-between">
        <HStack alignItems="center" gap={8}>
          <IconButton
            icon={<RefreshIcon />}
            title="Generate new inputs"
            onClick={() => {
              setState((prev) => ({
                ...prev,
                inputs: prev.inputs.map(() => randomIntegerInRange(1, 10)),
              }))
            }}
          />
          <Text>Inputs:</Text>
        </HStack>
        <HStack alignItems="center" gap={8}>
          {state.inputs.map((input, index) => (
            <InputItem key={index} index={index} value={input} />
          ))}
        </HStack>
      </HStack>

      <Button onClick={() => navigate({ id: 'result', state })}>
        Calculate
      </Button>
    </>
  )
}
