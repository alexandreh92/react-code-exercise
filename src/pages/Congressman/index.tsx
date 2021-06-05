import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchInput from '~/components/SearchInput';
import { useQuery, useStore } from '~/hooks';
import usePagination from '~/hooks/usePagination';
import DefaultLayout from '~/layouts/Default';
import MemberActions from '~/store/ducks/members';
import paramFactory from '~/utils/paramFactory';

const { getMembersRequest } = MemberActions;

const Congressman = () => {
  const dispatch = useDispatch();
  const { chamber, search, congress, page } = useQuery();
  const { members } = useStore(state => state.members);
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState<number>(page || 1);
  const [currentQuery, setCurrentQuery] = useState<string | undefined>(search);

  const { currentData, firstIdx, firstPage, lastIdx, totalPages } =
    usePagination({ data: members, currentPage });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentQuery(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(getMembersRequest({ chamber: 'house', congress: '117' }));
  }, [dispatch]);

  return (
    <DefaultLayout>
      <SearchInput name="search" />

      <div>{currentPage}</div>
      <div>{totalPages}</div>
      <button
        type="button"
        onClick={() => setCurrentPage(oldState => oldState - 1)}
      >
        previous
      </button>
      <button
        type="button"
        onClick={() => setCurrentPage(oldState => oldState + 1)}
      >
        next
      </button>
      {currentData.map(member => (
        <li>{member.id}</li>
      ))}
    </DefaultLayout>
  );
};

export default Congressman;
