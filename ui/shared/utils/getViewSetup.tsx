import { ReactNode, createContext, useState } from 'react'
import { ComponentWithChildrenProps } from '../../shared/props'

import { createContextHook } from './createContextHook'

export function getViewSetup<T extends string | number | symbol>(
  defaultView: T,
  name: string,
) {
  interface ViewState {
    view: T
    setView: (view: T) => void
  }

  const ViewContext = createContext<ViewState | undefined>(undefined)

  const ViewProvider = ({ children }: ComponentWithChildrenProps) => {
    const [view, setView] = useState<T>(defaultView)

    return (
      <ViewContext.Provider value={{ view, setView }}>
        {children}
      </ViewContext.Provider>
    )
  }

  const useView = createContextHook(ViewContext, `${name}ViewContent`)

  const RenderView = (props: Record<T, () => ReactNode>) => {
    const { view } = useView()
    const render = props[view]

    return <>{render()}</>
  }

  return {
    ViewProvider,
    useView,
    RenderView,
  }
}
