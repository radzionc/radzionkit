import { useCallback, useEffect, useState } from 'react'

export function useStepNavigation<T>(
  steps: readonly T[],
  initialStep: T = steps[0],
) {
  const [step, setStep] = useState<T>(initialStep)

  useEffect(() => {
    setStep(initialStep)
  }, [steps, initialStep])

  const toNextStep = useCallback(() => {
    setStep((prev) => steps[steps.indexOf(prev) + 1])
  }, [steps])

  const toPreviousStep = useCallback(() => {
    setStep((prev) => steps[steps.indexOf(prev) - 1])
  }, [steps])

  return { step, setStep, toNextStep, toPreviousStep }
}
