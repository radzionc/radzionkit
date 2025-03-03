import { TableLayout } from '@lib/ui/layout/TableLayout'
import { PaginatedView } from '@lib/ui/pagination/PaginatedView'
import { usePaginatedResultItems } from '@lib/ui/query/hooks/usePaginatedResultItems'
import { Text } from '@lib/ui/text'
import { range } from '@lib/utils/array/range'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Fragment } from 'react'

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

export default makeDemoPage(() => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    isFetched,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['items'],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      if (pageParam === null) return

      const result = await queryItems({ startAt: pageParam })

      return result
    },
    refetchOnMount: true,
    getNextPageParam: (lastPage) => lastPage?.nextItem || null,
  })

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
          hasNextPage={hasNextPage}
        >
          {noItems && !isLoading ? (
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
})
