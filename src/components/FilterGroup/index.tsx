import { PropsWithChildren, useState } from 'react';

import { Container, Content, Title } from './styles';

interface FilterGroupProps {
  title: string;
}

const FilterGroup = ({
  title,
  children,
  ...props
}: PropsWithChildren<FilterGroupProps>) => {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(oldState => !oldState);
  };

  return (
    <Container {...props} active={active}>
      <Title onClick={handleOnClick}>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default FilterGroup;
