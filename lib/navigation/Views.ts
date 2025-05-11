import { ComponentType } from 'react'

export type Views<T extends string = string> = Record<T, ComponentType<any>>
