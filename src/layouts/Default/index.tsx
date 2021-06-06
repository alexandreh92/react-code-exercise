import { PropsWithChildren, useCallback } from 'react';

import { Lightbulb, LightbulbFill } from '@styled-icons/bootstrap';
import { useDispatch } from 'react-redux';

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

import LogoSvg from '~/assets/logo_final.svg';
import LogoSvgDark from '~/assets/logo_final_dark.svg';
import ThemeActions from '~/store/ducks/theme';
import { useStore } from '~/hooks';
import { darkTheme, lightTheme } from '~/styles/theme';

const { changeTheme } = ThemeActions;

const Default = ({ children }: PropsWithChildren<any>) => {
  const dispatch = useDispatch();
  const { mode } = useStore(state => state.theme);

  /* Callbacks */
  const handleOnThemeChange = useCallback(() => {
    dispatch(changeTheme(mode === 'dark' ? lightTheme : darkTheme));
  }, [dispatch, mode]);

  return (
    <Container>
      <Header>
        {mode === 'dark' ? <Logo src={LogoSvgDark} /> : <Logo src={LogoSvg} />}
        <Nav>
          <NavItem exact to="/">
            Home
          </NavItem>
          <NavItem exact to="/congressman">
            Find
          </NavItem>
        </Nav>
        <Menu onClick={handleOnThemeChange}>
          {mode === 'dark' ? (
            <Lightbulb size="25" />
          ) : (
            <LightbulbFill size="25" />
          )}
        </Menu>
      </Header>
      <Content>{children}</Content>
      <Footer>
        Made with ♥ by <span> Alexandre Stapenhorst</span>
      </Footer>
    </Container>
  );
};

export default Default;
