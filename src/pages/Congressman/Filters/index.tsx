import { useEffect, useState } from 'react';

import FilterGroup from '~/components/FilterGroup';
import RadioButton from '~/components/RadioButton';
import { useQuery } from '~/hooks';
import arrayRange from '~/utils/arrayRange';
import paramFactory from '~/utils/paramFactory';

const Filters = () => {
  const { chamber, congress } = useQuery();

  const [chamberValues, setChamberValues] = useState<number[]>([]);

  const handleOnClick = ({
    currentTarget: { value, name },
  }: React.MouseEvent<HTMLInputElement>) => {
    paramFactory(name, value);
  };

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
    </>
  );
};

export default Filters;
