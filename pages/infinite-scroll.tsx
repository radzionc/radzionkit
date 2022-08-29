import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { RegularPage } from "ui/page/RegularPage";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";
import { useInfiniteQuery } from "react-query";
import { range } from "shared/utils/range";
import { PaginatedView } from "ui/PaginatedView";
import { usePaginatedResultItems } from "query/hooks/usePaginatedResultItems";
import { TableLayout } from "ui/TableLayout";
import { Fragment } from "react";

interface QueryItemsParams {
  startAt: number;
}

interface Item {
  name: string;
  price: number;
}

const resultsPerPage = 5;

const queryItems = async ({ startAt = 0 }: QueryItemsParams) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));

  const items: Item[] = range(resultsPerPage).map((index) => ({
    name: `Item #${index + startAt}`,
    price: Math.round(Math.random() * 1000),
  }));

  return {
    items,
    nextItem: startAt + resultsPerPage,
  };
};

const InfiniteScrollPage: NextPage = () => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    isFetched,
    isIdle,
  } = useInfiniteQuery(
    "items",
    async ({ pageParam }) => {
      if (pageParam === null) return;

      const result = await queryItems({ startAt: pageParam });

      return result;
    },
    {
      refetchOnMount: true,
      keepPreviousData: false,
      getNextPageParam: (lastPage) => lastPage?.nextItem || null,
    }
  );

  const items = usePaginatedResultItems(data, (response) => response.items);
  const noItems = isFetched && items.length < 1;

  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text weight="bold" size={24} color="regular">
            Infinite Scroll
          </Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/infinite-scroll.tsx" />
        </HStack>
      }
    >
      <TableLayout
        gridTemplateColumns="120px 80px"
        columnNames={["Name", "Price"]}
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
    </RegularPage>
  );
};

export default InfiniteScrollPage;
