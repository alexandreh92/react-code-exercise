import { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import {
  Container,
  Header,
  Avatar,
  HeaderContent,
  Name,
  Title,
} from './styles';

import DefaultLayout from '~/layouts/Default';
import api from '~/services/api';
import { decrypt } from '~/utils/base64';

type Params = {
  id: string;
  addressB64: string;
};

const Show = () => {
  const { id, addressB64 } = useParams<Params>();

  const address = decrypt(addressB64);

  const [memberData, setMemberData] = useState({});
  const [memberLoading, setmemberLoading] = useState(true);

  const getMemberData = useCallback(async () => {
    try {
      const { data } = await api.get(`members/${id}`);
      console.log(data.results[0]);
      setMemberData(data.results[0]);
    } catch (error) {
      // console
    }
  }, [id]);

  useEffect(() => {
    getMemberData();
  }, [getMemberData]);

  return (
    <DefaultLayout>
      <Container>
        <Header>
          <Avatar
            src="https://avatars.dicebear.com/api/avataaars/foo.svg"
            alt="foo"
          />
          <HeaderContent>
            <Name>name</Name>
            <Title>title</Title>
          </HeaderContent>
        </Header>
      </Container>
    </DefaultLayout>
  );
};

export default Show;
