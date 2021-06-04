import { PropsWithChildren } from 'react';

import { Container, Header, Logo, Nav, Menu, Content, Footer } from './styles';

const Default = ({ children }: PropsWithChildren<any>) => {
  return (
    <Container>
      <Header>
        <Logo />
        <Nav />
        <Menu />
      </Header>
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Default;
