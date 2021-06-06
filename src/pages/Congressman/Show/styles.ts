import styled from 'styled-components';

import FilterGroup from '~/components/FilterGroup';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow-y: auto;

  position: relative;

  height: 100%;

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  padding: 40px;

  box-shadow: rgb(0 0 0 / 10%) 1px 1px 12px 0px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  height: 100px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  box-shadow: rgb(0 0 0 / 30%) 2px 2px 12px 0px;

  background: ${({ theme }) => theme.colors.backgroundContrast};
`;

export const HeaderContent = styled.div`
  margin-left: 20px;
`;

export const Name = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.h3`
  font-weight: bold;

  margin-bottom: 10px;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 20px 20px 0;
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const Party = styled.h2``;

export const RoleGroup = styled(FilterGroup)`
  margin: 10px;

  display: flex;
  flex-direction: column;

  & section {
    display: flex;
    align-items: flex-start;
  }
`;

export const RoleContainer = styled.div`
  padding: 10px 0;

  display: grid;
  grid-template-rows: repeat(3, 20px);
  grid-template-columns: auto;
  grid-gap: 0 10px;
  grid-auto-flow: column;

  & h4 {
    font-size: 11px;
    font-weight: bold;

    & span {
      font-weight: normal;
    }
  }
`;

export const Subgroup = styled.div``;
