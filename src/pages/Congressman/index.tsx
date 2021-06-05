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

import SearchInput from '~/components/SearchInput';
import { useQuery, useStore } from '~/hooks';
import usePagination from '~/hooks/usePagination';
import DefaultLayout from '~/layouts/Default';
import MemberActions from '~/store/ducks/members';
import CongressmanItem from '~/components/CongressmanItem';

const { getMembersRequest } = MemberActions;

const Congressman = () => {
  const dispatch = useDispatch();
  const { chamber, search, congress, page } = useQuery();
  const { members } = useStore(state => state.members);

  const [currentPage, setCurrentPage] = useState<number>(page || 1);

  const { currentData } = usePagination({
    data: members,
    currentPage,
    filters: { first_name: search, congress, chamber },
  });

  useEffect(() => {
    dispatch(getMembersRequest({ chamber: 'house', congress: '117' }));
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Container>
        <SidebarContainer>
          <SidebarHeader>
            <Header>Filters</Header>
          </SidebarHeader>
          <Sidebar>
            <div>filter 1</div>
            <div>filter 2</div>
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
          </Content>
        </ContentContainer>
        {/* <Sidebar>filters</Sidebar>
        <Content>

          <div>{search}</div>
          <div>{currentPage}</div>
          <div>{totalPages}</div>

            next
          </button>

        </Content> */}
      </Container>
    </DefaultLayout>
  );
};

export default Congressman;
