import { ReactNode } from "react"

type QueryStatus = "idle" | "error" | "loading" | "success"

interface QueryDependantProps<T> {
  status: QueryStatus
  data: T | undefined
  error: () => ReactNode
  loading: () => ReactNode
  success: (data: T) => ReactNode
}

export function QueryDependant<T>({
  status,
  data,
  error,
  loading,
  success
}: QueryDependantProps<T>) {
  if (status === "error") {
    return <>{error()}</>
  }

  if (status === 'loading') {
    return <>{loading()}</>
  }

  if (data) {
    return <>{success(data)}</>
  }

  return null
}