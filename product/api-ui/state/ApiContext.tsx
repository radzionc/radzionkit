import { createContextHook } from '@lib/ui/state/createContextHook'
import { ApiInterface } from '@product/api-interface/ApiInterface'
import { createContext } from 'react'

export type CallApi = <M extends keyof ApiInterface>(
  method: M,
  input: ApiInterface[M]['input'],
) => Promise<ApiInterface[M]['output']>

type ApiState = {
  call: CallApi
}

export const ApiContext = createContext<ApiState | undefined>(undefined)

export const useApi = createContextHook(ApiContext, 'ApiContext')
