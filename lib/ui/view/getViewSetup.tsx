import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'
import { ChildrenProp } from '../props'
import { createContextHook } from '../state/createContextHook'

type GetViewSetupInput<T extends string | number | symbol> = {
  defaultView: T
  name: string
  useViewState?: (initialState: T) => [T, Dispatch<SetStateAction<T>>]
}

export function getViewSetup<T extends string | number | symbol>({
  defaultView,
  name,
  useViewState = useState,
}: GetViewSetupInput<T>) {
  interface ViewState {
    view: T
    setView: (view: T) => void
  }

  const ViewContext = createContext<ViewState | undefined>(undefined)

  const ViewProvider = ({ children }: ChildrenProp) => {
    const [view, setView] = useViewState(defaultView)

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
