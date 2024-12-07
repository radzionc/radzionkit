import { ApiInterface } from '@product/api-interface/ApiInterface'
import { ApiResolverContext } from './ApiResolverContext'

export interface ApiResolverParams<K extends keyof ApiInterface> {
  input: ApiInterface[K]['input']
  context: ApiResolverContext
}

export type ApiResolver<K extends keyof ApiInterface> = (
  params: ApiResolverParams<K>,
) => Promise<ApiInterface[K]['output']>
