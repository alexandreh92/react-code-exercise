import Loader from 'react-loader-spinner';
import { useTheme } from 'styled-components';

import { Container } from './styles';

const Loading = () => {
  const {
    colors: { detail },
  } = useTheme();

  return (
    <Container>
      <Loader type="Oval" color={detail} height={30} width={30} />
    </Container>
  );
};

export default Loading;
