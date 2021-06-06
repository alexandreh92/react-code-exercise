import { useCallback, useEffect, useState } from 'react';

import GoogleMapReact, { Coords } from 'google-map-react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Header,
  Avatar,
  HeaderContent,
  Name,
  Party,
  Title,
  Content,
  ContentLeft,
  ContentRight,
  RoleGroup,
  RoleContainer,
  Subgroup,
  MapContainer,
} from './styles';
import CommitteeDetail from './CommitteeDetail';

import { fromAddress } from '~/services/geocode';
import DefaultLayout from '~/layouts/Default';
import api from '~/services/api';
import { decrypt } from '~/utils/base64';
import { MemberLookup } from '~/@types';
import Loading from '~/components/Loading';
import MapPin from '~/components/MapPin';

type Params = {
  id: string;
  addressB64: string;
};

const Show = () => {
  /* Hooks */

  const { id, addressB64 } = useParams<Params>();

  const location = {
    lat: 38.8868888,
    lng: -77.00635849999999,
  };

  const [memberData, setMemberData] = useState<MemberLookup>(
    {} as MemberLookup,
  );
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState<Coords>(location);

  const address = decrypt(addressB64);

  const fullName = [memberData.first_name, memberData.last_name]
    .filter(Boolean)
    .join(' ');

  /* Callbacks */

  const getMemberData = useCallback(async () => {
    try {
      const { data } = await api.get(`members/${id}`);
      setMemberData(data.results[0]);
      const { lat, lng } = await fromAddress(address);
      setCoords({ lat, lng });
      setLoading(false);
    } catch (error) {
      // console
    }
  }, [id, address]);

  /* Effects */

  useEffect(() => {
    getMemberData();
  }, [getMemberData]);

  return (
    <DefaultLayout>
      <Container loading={loading}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header>
              <Avatar
                src={`https://avatars.dicebear.com/api/avataaars/${fullName}.svg`}
                alt={fullName}
              />
              <HeaderContent>
                <Name>{fullName}</Name>
                <Party>
                  {memberData.current_party === 'R'
                    ? 'Republican Party'
                    : 'Democrate Party'}
                </Party>
              </HeaderContent>
            </Header>
            <Content>
              <ContentLeft>
                <Title>Roles</Title>
                {memberData.roles.map(role => (
                  <RoleGroup
                    title={`${role.title} - ${role.chamber} ${role.congress}`}
                  >
                    <RoleContainer>
                      <h4>
                        Congress: <span>{role.congress}</span>
                      </h4>
                      <h4>
                        Chamber: <span>{role.chamber}</span>
                      </h4>
                      <h4>
                        Title: <span>{role.title}</span>
                      </h4>
                      <h4>
                        Party:{' '}
                        <span>
                          {role.party === 'R' ? 'Republican' : 'Democrate'}
                        </span>
                      </h4>
                      <h4>
                        Total Votes: <span>{role.total_votes}</span>
                      </h4>
                      <h4>
                        Missed Votes: <span>{role.missed_votes}</span>
                      </h4>
                      <h4>
                        District: <span>{role.district}</span>
                      </h4>
                      <h4>
                        Start Date: <span>{role.start_date}</span>
                      </h4>
                      <h4>
                        End Date: <span>{role.end_date}</span>
                      </h4>
                    </RoleContainer>
                    {!!role.committees.length && (
                      <>
                        <Title>Committees</Title>
                        <Subgroup>
                          {role.committees.map(committee => (
                            <RoleGroup title={committee.name}>
                              <RoleContainer>
                                <CommitteeDetail data={committee} />
                              </RoleContainer>
                            </RoleGroup>
                          ))}
                        </Subgroup>
                      </>
                    )}
                    {!!role.subcommittees.length && (
                      <>
                        <Title>Subcommittees</Title>
                        <Subgroup>
                          {role.subcommittees.map(subcommittee => (
                            <RoleGroup title={subcommittee.name}>
                              <RoleContainer>
                                <CommitteeDetail data={subcommittee} />
                              </RoleContainer>
                            </RoleGroup>
                          ))}
                        </Subgroup>
                      </>
                    )}
                  </RoleGroup>
                ))}
              </ContentLeft>
              <ContentRight>
                <Title>Address</Title>
                <MapContainer>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: process.env.REACT_APP_GOOGLE_KEY || '',
                    }}
                    defaultCenter={coords}
                    defaultZoom={11}
                  >
                    <MapPin lat={coords.lat} lng={coords.lng} />
                  </GoogleMapReact>
                </MapContainer>
              </ContentRight>
            </Content>
          </>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default Show;
