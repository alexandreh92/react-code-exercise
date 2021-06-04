import { useSelector } from 'react-redux';

import { ApplicationState } from '~/@types';

// import { Container } from './styles';

export default function Pages() {
  const { members } = useSelector((state: ApplicationState) => state.members);

  return (
    <div>
      yo
      <div>{JSON.stringify(members)}</div>
    </div>
  );
}
