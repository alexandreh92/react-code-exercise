import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPrimary};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.backgroundContrast};
`;

export const Content = styled.section`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  width: 50%;

  box-shadow: rgb(0 0 0 / 25%) 5px 5px 32px -4px;

  padding: 50px;

  border-style: solid;
  border-width: 0 0 6px;
  border-color: ${({ theme }) => theme.colors.detail};

  & > h1 {
    font-size: 24px;
    font-weight: bold;

    & span {
      color: ${({ theme }) => theme.colors.detail};
    }
  }

  & > h2 {
    margin: 40px 0;

    & a {
      position: relative;

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
  }

  @media (max-width: 680px) {
    width: 80%;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 60px;

  background: transparent;

  border: 2px solid ${({ theme }) => theme.colors.detail};

  transition: background-color 300ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.detail};
  }
`;
