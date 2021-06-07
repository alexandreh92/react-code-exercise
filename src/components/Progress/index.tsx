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
      <Title data-testid="title">{title}</Title>
      <PBar data-testid="progress" {...props} value={value} max={max} />
    </Container>
  );
};

export default Progress;
