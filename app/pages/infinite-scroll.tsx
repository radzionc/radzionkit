import type { NextPage } from 'next'
import { Text } from '@reactkit/ui/ui/Text'
import { useInfiniteQuery } from 'react-query'
import { range } from '@reactkit/utils/array/range'
import { PaginatedView } from '@reactkit/ui/ui/PaginatedView'
import { usePaginatedResultItems } from '@reactkit/ui/query/hooks/usePaginatedResultItems'
import { TableLayout } from '@reactkit/ui/ui/TableLayout'
import { Fragment } from 'react'
import { DemoPage } from 'components/DemoPage'

interface QueryItemsParams {
  startAt: number
}

interface Item {
  name: string
  price: number
}

const resultsPerPage = 5

const queryItems = async ({ startAt = 0 }: QueryItemsParams) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000))

  const items: Item[] = range(resultsPerPage).map((index) => ({
    name: `Item #${index + startAt}`,
    price: Math.round(Math.random() * 1000),
  }))

  return {
    items,
    nextItem: startAt + resultsPerPage,
  }
}

const InfiniteScrollPage: NextPage = () => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    isFetched,
    isIdle,
  } = useInfiniteQuery(
    'items',
    async ({ pageParam }) => {
      if (pageParam === null) return

      const result = await queryItems({ startAt: pageParam })

      return result
    },
    {
      refetchOnMount: true,
      keepPreviousData: false,
      getNextPageParam: (lastPage) => lastPage?.nextItem || null,
    },
  )

  const items = usePaginatedResultItems(data, (response) => response.items)
  const noItems = isFetched && items.length < 1

  return (
    <DemoPage title="Infinite Scroll" youtubeVideoId="mZfDvfs2GtI">
      <TableLayout
        gridTemplateColumns="120px 80px"
        columnNames={['Name', 'Price']}
      >
        <PaginatedView
          onRequestToLoadMore={fetchNextPage}
          isLoading={isLoading || isFetchingNextPage}
        >
          {noItems && isIdle ? (
            <Text>No items 😴</Text>
          ) : (
            items.map(({ name, price }) => (
              <Fragment key={name}>
                <Text>{name}</Text>
                <Text color="supporting">${price}</Text>
              </Fragment>
            ))
          )}
        </PaginatedView>
      </TableLayout>
    </DemoPage>
  )
}

export default InfiniteScrollPage
