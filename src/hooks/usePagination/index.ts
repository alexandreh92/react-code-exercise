interface PaginationProps<T> {
  currentPage?: number;
  perPage?: number;
  data?: T[];
}

const usePagination = <T>({
  currentPage = 1,
  perPage = 20,
  data = [],
}: PaginationProps<T>) => {
  const firstPage = 1;
  const lastIdx = currentPage * perPage;
  const firstIdx = lastIdx - perPage;
  const currentData = data.slice(firstIdx, lastIdx);
  const totalPages = Math.ceil(data.length / perPage);

  return { currentData, lastIdx, firstIdx, totalPages, firstPage };
};

export default usePagination;
