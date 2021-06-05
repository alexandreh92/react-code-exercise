import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 80px 1fr 80px;
  grid-template-columns: 1fr;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20%;

  box-shadow: rgb(0 0 0 / 10%) 1px 1px 12px 0px;

  z-index: 99;
`;

export const Logo = styled.div``;

export const Nav = styled.nav``;

export const NavItem = styled(NavLink)`
  margin: 0 10px;
  position: relative;

  &.active,
  &:hover {
    &::before {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      content: '';
      height: 2px;
      width: 100%;
      background: ${({ theme }) => theme.colors.detail};
    }
  }
`;

export const Menu = styled.div``;

export const Content = styled.div`
  padding: 0 20%;

  background: ${({ theme }) => theme.colors.backgroundPrimary};

  overflow-y: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20%;

  font-size: 12px;
  font-weight: bold;

  box-shadow: rgb(0 0 0 / 10%) 1px 1px 12px 0px;

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  & span {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.detail};
  }
`;
