import { NextPage } from 'next'
import { ReactNode } from 'react'

export type GetLayout = (page: ReactNode) => ReactNode

export type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout
}
