import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  margin: 0 20px;

  padding: 20px 0;
`;

export const Avatar = styled.img`
  height: 40px;
  border-radius: 40px;

  background: ${({ theme }) => theme.colors.backgroundContrast};
  box-shadow: rgb(0 0 0 / 30%) 2px 2px 12px 0px;
`;

export const Content = styled.div`
  margin-left: 20px;
  flex: 1;
`;

export const Name = styled.h3`
  font-size: 12px;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const MetaWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Meta = styled.header`
  display: grid;
  grid-template-rows: repeat(3, 20px);
  grid-template-columns: auto auto;
  grid-gap: 0 10px;
  grid-auto-flow: column;

  & > h4 {
    font-size: 11px;
    font-weight: bold;
    & > span {
      font-weight: normal;
    }
  }
`;

export const Bars = styled.div`
  display: flex;
  flex-direction: column;
`;
