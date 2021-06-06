import { useEffect, useState } from 'react';

import FilterGroup from '~/components/FilterGroup';
import RadioButton from '~/components/RadioButton';
import Slider from '~/components/Slider';
import { useQuery } from '~/hooks';
import arrayRange from '~/utils/arrayRange';
import paramFactory from '~/utils/paramFactory';

const Filters = () => {
  const { chamber, congress, votes_with_party_pct, votes_against_party_pct } =
    useQuery();

  const [chamberValues, setChamberValues] = useState<number[]>([]);
  const [partyVotes, setPartyVotes] = useState(votes_with_party_pct || 100);
  const [againstVotes, setAgainstVotes] = useState(
    votes_against_party_pct || 0,
  );

  const handleOnClick = ({
    currentTarget: { value, name },
  }: React.MouseEvent<HTMLInputElement>) => {
    paramFactory(name, value);
  };

  /* Callbacks */

  const handleSetPartyVotes = ({
    currentTarget: { value, name },
  }: React.FormEvent<HTMLInputElement>) => {
    paramFactory(name, value);
    setPartyVotes(value);
  };

  const handleSetAgainstVotes = ({
    currentTarget: { value, name },
  }: React.FormEvent<HTMLInputElement>) => {
    paramFactory(name, value);
    setAgainstVotes(value);
  };

  /* Effects */

  useEffect(() => {
    const currChamber = chamber || 'house';

    if (currChamber === 'house') {
      setChamberValues(arrayRange(102, 117));
    } else {
      setChamberValues(arrayRange(80, 117));
    }
  }, [chamber]);

  return (
    <>
      <FilterGroup title="Chamber">
        <RadioButton
          label="house"
          name="chamber"
          value="house"
          defaultChecked={(chamber || 'house') === 'house'}
          onClick={handleOnClick}
        />
        <RadioButton
          label="senate"
          name="chamber"
          value="senate"
          defaultChecked={chamber === 'senate'}
          onClick={handleOnClick}
        />
      </FilterGroup>
      <FilterGroup title="Congress">
        {chamberValues.map(value => (
          <RadioButton
            key={value}
            name="congress"
            label={value.toString()}
            value={value}
            defaultChecked={(congress || '115') === value.toString()}
            onClick={handleOnClick}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Votes With Party">
        <Slider
          value={partyVotes}
          name="votes_with_party_pct"
          onChange={handleSetPartyVotes}
        />
      </FilterGroup>
      <FilterGroup title="Votes Against Party">
        <Slider
          value={againstVotes}
          name="votes_against_party_pct"
          onChange={handleSetAgainstVotes}
        />
      </FilterGroup>
    </>
  );
};

export default Filters;
