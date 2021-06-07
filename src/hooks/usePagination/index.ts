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
  const lastIdx = currentPage * perPage;
  const firstIdx = lastIdx - perPage;

  const filteredData = data.filter(record => {
    return Object.keys(filters).every(filter => {
      if (filter === ('votes_with_party_pct' || 'votes_against_party_pct')) {
        return filters[filter] ? filters[filter] >= record[filter] : true;
      }
      return filters[filter] ? filters[filter] === record[filter] : true;
    });
  });

  const currentData = filteredData.slice(firstIdx, lastIdx);

  const totalPages = Math.ceil(filteredData.length / perPage);

  return { currentData, totalPages };
};

export default usePagination;
