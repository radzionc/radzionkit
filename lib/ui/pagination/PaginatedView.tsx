import { ReactNode, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import styled from 'styled-components'
import { Spinner } from '../loaders/Spinner'
import { HStack, VStack } from '@lib/ui/css/stack'
import { Text } from '../text'
import { getColor } from '../theme/getters'

interface Props {
  children: ReactNode
  isLoading?: boolean
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
  onRequestToLoadMore,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '200px',
    threshold: 0,
  })

  useEffect(() => {
    if (intersection?.isIntersecting && !isLoading) {
      onRequestToLoadMore()
    }
  }, [intersection?.isIntersecting, onRequestToLoadMore, isLoading])

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
