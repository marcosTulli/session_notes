const createGetNextPageParam =
  <T>(pageSize: number) =>
  (lastPage: T[], _allPages: T[][], pageParam = 1): number | undefined => {
    return lastPage.length < pageSize ? undefined : pageParam + 1;
  };

const getPreviousPageParam = <T>(
  _firstPage: T[],
  _allPages: T[][],
  pageParam?: number,
): number | undefined => {
  return pageParam && pageParam > 1 ? pageParam - 1 : undefined;
};

export const infiniteQueryHelper = <T>(pageSize: number) => ({
  initialPageParam: 1,
  getNextPageParam: createGetNextPageParam<T>(pageSize),
  getPreviousPageParam,
  staleTime: 0,
  gcTime: 0,
});
