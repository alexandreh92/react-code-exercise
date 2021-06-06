import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  Container,
  Content,
  Sidebar,
  SidebarHeader,
  ContentHeader,
  SidebarContainer,
  ContentContainer,
  Header,
} from './styles';
import Filters from './Filters';

import SearchInput from '~/components/SearchInput';
import { useQuery, useStore } from '~/hooks';
import usePagination from '~/hooks/usePagination';
import DefaultLayout from '~/layouts/Default';
import MemberActions from '~/store/ducks/members';
import CongressmanItem from '~/components/CongressmanItem';
import Loading from '~/components/Loading';
import Pagination from '~/components/Pagination';
import paramFactory from '~/utils/paramFactory';

const { getMembersRequest } = MemberActions;

const Congressman = () => {
  /* Hooks */

  const dispatch = useDispatch();

  const {
    search,
    page,
    chamber,
    congress,
    votes_with_party_pct,
    votes_against_party_pct,
  } = useQuery();

  const { members, loading } = useStore(state => state.members);

  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(page, 10) || 1,
  );

  const { currentData, totalPages } = usePagination({
    data: members,
    currentPage,
    filters: {
      first_name: search,
      votes_with_party_pct: parseInt(votes_with_party_pct, 10),
      votes_against_party_pct: parseInt(votes_against_party_pct, 10),
    },
  });

  /* Callbacks */

  const handlePreviousPage = () => {
    const newPage = currentPage - 1;

    setCurrentPage(newPage);
    paramFactory('page', newPage.toString());
  };

  const handleNextPage = () => {
    const newPage = currentPage + 1;

    setCurrentPage(newPage);
    paramFactory('page', newPage.toString());
  };

  /* Effects */

  useEffect(() => {
    dispatch(
      getMembersRequest({
        chamber: chamber || 'house',
        congress: congress || '115',
      }),
    );
  }, [dispatch, chamber, congress]);

  return (
    <DefaultLayout>
      <Container>
        <SidebarContainer>
          <SidebarHeader>
            <Header>Filters</Header>
          </SidebarHeader>
          <Sidebar>
            <Filters />
          </Sidebar>
        </SidebarContainer>
        <ContentContainer>
          <ContentHeader>
            <Header>Congressman</Header>
            <SearchInput
              name="search"
              placeholder="Search..."
              defaultValue={search}
            />
          </ContentHeader>
          <Content>
            {loading ? (
              <Loading />
            ) : (
              <>
                {currentData.map(member => (
                  <CongressmanItem key={member.id} member={member} />
                ))}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onNextPress={handleNextPage}
                  onPreviousPress={handlePreviousPage}
                />
              </>
            )}
          </Content>
        </ContentContainer>
      </Container>
    </DefaultLayout>
  );
};

export default Congressman;
