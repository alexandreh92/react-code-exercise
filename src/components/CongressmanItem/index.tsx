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
import { encrypt } from '~/utils/base64';

interface CongressmanItemProps {
  member: Member;
}

const CongressmanItem = ({ member }: CongressmanItemProps) => {
  const fullName = [member.short_title, member.first_name, member.last_name]
    .filter(Boolean)
    .join(' ');

  const fullAddress = encrypt(`${member.office}, ${member.state}`);

  return (
    <Container
      data-testid="container"
      to={`congressman/${member.id}/${fullAddress}`}
    >
      <Avatar
        data-testid="avatar"
        src={`https://avatars.dicebear.com/api/avataaars/${member.twitter_account}.svg`}
        alt={fullName}
      />
      <Content>
        <Name data-testid="name">{fullName}</Name>
        <MetaWrapper>
          <Meta>
            <h4>
              Title: <span data-testid="title">{member.title}</span>
            </h4>
            <h4>
              Party:{' '}
              <span data-testid="party">
                {member.party === 'R' ? 'Republican' : 'Democrate'}
              </span>
            </h4>
            <h4>
              Next Election:{' '}
              <span data-testid="next_election">{member.next_election}</span>
            </h4>
            <h4>
              State: <span data-testid="state">{member.state}</span>
            </h4>
            <h4>
              In Office:{' '}
              <span data-testid="in_office">
                {member.in_office ? 'Yes' : 'No'}
              </span>
            </h4>
            <h4>
              Gender:{' '}
              <span data-testid="gender">
                {member.gender === 'M' ? 'Male' : 'Female'}
              </span>
            </h4>
          </Meta>
          <Bars>
            <Progress
              data-testid="votes_with_party_pct"
              title="Votes with party"
              value={member.votes_with_party_pct}
            />
            <Progress
              data-testid="missed_votes_pct"
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
