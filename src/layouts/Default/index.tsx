import { PropsWithChildren } from 'react';

import {
  Container,
  Header,
  Logo,
  Nav,
  Menu,
  Content,
  Footer,
  NavItem,
} from './styles';

const Default = ({ children }: PropsWithChildren<any>) => {
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <Nav>
          <NavItem exact to="/">
            Home
          </NavItem>
          <NavItem exact to="/congressman">
            Find
          </NavItem>
        </Nav>
        <Menu>Menu</Menu>
      </Header>
      <Content>{children}</Content>
      <Footer>
        Made with ♥ by <span> Alexandre Stapenhorst</span>
      </Footer>
    </Container>
  );
};

export default Default;
