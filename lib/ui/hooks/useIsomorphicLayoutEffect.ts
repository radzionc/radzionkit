import { useEffect, useLayoutEffect } from 'react'
import { hasWindow } from '../utils/window'

export const useIsomorphicLayoutEffect = hasWindow ? useLayoutEffect : useEffect
