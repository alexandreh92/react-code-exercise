import { ProgressHTMLAttributes } from 'react';

import { Container, Title, PBar } from './styles';

const Progress = ({
  value,
  max = '100',
  title,
  ...props
}: ProgressHTMLAttributes<HTMLProgressElement>) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PBar {...props} value={value} max={max} />
    </Container>
  );
};

export default Progress;
