import { ReactNode } from 'react'

interface ConditionalWrapperProps {
  condition: boolean
  content: ReactNode
  true: (content: ReactNode) => ReactNode
  false: (content: ReactNode) => ReactNode
}

export const ConditionalWrapper = ({
  condition,
  content,
  true: renderTrue,
  false: renderFalse,
}: ConditionalWrapperProps) => {
  const render = condition ? renderTrue : renderFalse

  return <>{render(content)}</>
}
