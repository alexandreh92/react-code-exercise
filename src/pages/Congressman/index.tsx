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

const { getMembersRequest } = MemberActions;

const Congressman = () => {
  /* Hooks */

  const dispatch = useDispatch();

  const { search, page, chamber, congress } = useQuery();

  const { members, loading } = useStore(state => state.members);

  const [currentPage, setCurrentPage] = useState<number>(page || 1);

  const { currentData } = usePagination({
    data: members,
    currentPage,
    filters: { first_name: search },
  });

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
              </>
            )}
          </Content>
        </ContentContainer>
      </Container>
    </DefaultLayout>
  );
};

export default Congressman;
