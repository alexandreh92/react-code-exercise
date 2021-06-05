import { useLocation } from 'react-router-dom';

interface QueryType {
  congress?: string;
  chamber?: string;
  search?: string;
  [key: string]: any;
}

const useQuery = () => {
  const { search } = useLocation();

  const queryParams: QueryType = {};

  const searchParams = search.replaceAll('?', '').split('&');
  searchParams.forEach(param => {
    const values = param.split('=');

    queryParams[values[0]] = values[1];
  });

  return queryParams;
};

export default useQuery;
