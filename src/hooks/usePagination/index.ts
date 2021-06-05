interface PaginationProps<T extends Record<string, any>> {
  currentPage?: number;
  perPage?: number;
  data?: T[];
  filters?: {
    [key: string]: any;
  };
}

const usePagination = <T extends Record<string, any>>({
  currentPage = 1,
  perPage = 20,
  data = [],
  filters = {},
}: PaginationProps<T>) => {
  const firstPage = 1;
  const lastIdx = currentPage * perPage;
  const firstIdx = lastIdx - perPage;

  const filteredData = data.filter(record => {
    return Object.keys(filters).every(filter => {
      return filters[filter] ? filters[filter] === record[filter] : true;
    });
  });

  const currentData = filteredData.slice(firstIdx, lastIdx);

  const totalPages = Math.ceil(filteredData.length / perPage);

  return { currentData, lastIdx, firstIdx, totalPages, firstPage };
};

export default usePagination;
