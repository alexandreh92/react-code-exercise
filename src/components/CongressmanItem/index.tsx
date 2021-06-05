import {
  Container,
  Content,
  Avatar,
  Name,
  MetaWrapper,
  Meta,
  Bars,
} from './styles';

import Progress from '~/components/Progress';
import { Member } from '~/@types';

interface CongressmanItemProps {
  member: Member;
}

const CongressmanItem = ({ member }: CongressmanItemProps) => {
  const fullName = [member.short_title, member.first_name, member.last_name]
    .filter(Boolean)
    .join(' ');

  return (
    <Container>
      <Avatar
        src={`https://avatars.dicebear.com/api/avataaars/${member.twitter_account}.svg`}
        alt={fullName}
      />
      <Content>
        <Name>{fullName}</Name>
        <MetaWrapper>
          <Meta>
            <h4>
              Title: <span>{member.title}</span>
            </h4>
            <h4>
              Party:{' '}
              <span>{member.party === 'R' ? 'Republican' : 'Democrate'}</span>
            </h4>
            <h4>
              Next Election: <span>{member.next_election}</span>
            </h4>
            <h4>
              State: <span>{member.state}</span>
            </h4>
            <h4>
              In Office: <span>{member.in_office ? 'Yes' : 'No'}</span>
            </h4>
            <h4>
              Gender: <span>{member.gender === 'M' ? 'Male' : 'Female'}</span>
            </h4>
          </Meta>
          <Bars>
            <Progress
              title="Votes with party"
              value={member.votes_with_party_pct}
            />
            <Progress
              title="Participation"
              value={100 - member.missed_votes_pct}
            />
          </Bars>
        </MetaWrapper>
      </Content>
    </Container>
  );
};

export default CongressmanItem;
