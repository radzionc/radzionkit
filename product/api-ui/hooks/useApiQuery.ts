import { without } from '@lib/utils/array/without'
import {
  ApiInterface,
  ApiMethodName,
} from '@product/api-interface/ApiInterface'
import { useApi } from '@product/api-ui/state/ApiContext'
import { useQuery } from '@tanstack/react-query'

export const getApiQueryKey = <M extends ApiMethodName>(
  method: M,
  input: ApiInterface[M]['input'],
) => without([method, input], undefined)

export const useApiQuery = <M extends ApiMethodName>(
  method: M,
  input: ApiInterface[M]['input'],
) => {
  const { call } = useApi()

  return useQuery({
    queryKey: getApiQueryKey(method, input),
    queryFn: () => call(method, input),
  })
}
