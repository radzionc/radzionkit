import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type GetLayout = (page: ReactElement) => ReactNode

export type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
