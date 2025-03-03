import { HStack, VStack } from '@lib/ui/css/stack'
import { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { useIntersection } from '../hooks/useIntersection'
import { Spinner } from '../loaders/Spinner'
import { Text } from '../text'
import { getColor } from '../theme/getters'

interface Props {
  children: ReactNode
  isLoading?: boolean
  hasNextPage: boolean
  onRequestToLoadMore: () => void
}

const LoaderContainer = styled(HStack)`
  color: ${getColor('textShy')};
`

const Footer = styled(VStack)`
  grid-column: 1/-1;
`

export const PaginatedView = ({
  children,
  isLoading,
  hasNextPage,
  onRequestToLoadMore,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '200px',
    threshold: 0,
  })

  useEffect(() => {
    if (intersection?.isIntersecting && !isLoading && hasNextPage) {
      onRequestToLoadMore()
    }
  }, [
    hasNextPage,
    intersection?.isIntersecting,
    isLoading,
    onRequestToLoadMore,
  ])

  return (
    <>
      {children}
      <Footer fullWidth alignItems="center">
        <div ref={ref} />
        {isLoading && (
          <LoaderContainer
            fullWidth
            gap={8}
            justifyContent="center"
            alignItems="center"
          >
            <Spinner />
            <Text>Loading</Text>
          </LoaderContainer>
        )}
      </Footer>
    </>
  )
}
