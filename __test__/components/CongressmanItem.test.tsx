import { render } from '../test_utils';
import CongressmanItem from '../../src/components/CongressmanItem';
import memberMock from '../../__mocks__/member';

describe('FilterGroup', () => {
  it('assings alt attribute to avatar', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const avatar = getByTestId('avatar');

    expect(avatar).toHaveAttribute('alt', 'Sen. Lamar Alexander');
  });

  it('successfull render fullName', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const name = getByTestId('name');

    expect(name).toHaveTextContent('Sen. Lamar Alexander');
  });

  it('successfull render title', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const title = getByTestId('meta-title');

    expect(title).toHaveTextContent(memberMock.title);
  });

  it('successfull render party', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const party = getByTestId('party');

    expect(party).toHaveTextContent(memberMock.party);
  });

  it('successfull render next_election', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const next_election = getByTestId('next_election');

    expect(next_election).toHaveTextContent(memberMock.next_election);
  });

  it('successfull render state', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const state = getByTestId('state');

    expect(state).toHaveTextContent(memberMock.state);
  });

  it('successfull render in_office', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const in_office = getByTestId('in_office');

    expect(in_office).toHaveTextContent('Yes');
  });

  it('successfull render gender', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const gender = getByTestId('gender');

    expect(gender).toHaveTextContent('Male');
  });

  it('successfull render votes_with_party_pct', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const votes_with_party_pct = getByTestId('votes_with_party_pct');

    expect(votes_with_party_pct).toHaveValue(memberMock.votes_with_party_pct);
  });

  it('successfull render missed_votes_pct', () => {
    const { getByTestId } = render(<CongressmanItem member={memberMock} />);
    const missed_votes_pct = getByTestId('missed_votes_pct');

    expect(missed_votes_pct).toHaveValue(100 - memberMock.missed_votes_pct);
  });
});
