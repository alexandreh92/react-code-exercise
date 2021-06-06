import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 190px auto;
  grid-template-rows: auto;
  flex: 1;
  grid-template-areas: 'f c';

  grid-gap: 0 20px;

  height: 100%;
`;

export const SidebarContainer = styled.aside`
  box-shadow: rgb(0 0 0 / 10%) 1px 1px 12px 0px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: grid;
  grid-template-rows: 40px auto;

  overflow: hidden;
`;

export const ContentContainer = styled.section`
  box-shadow: rgb(0 0 0 / 10%) 1px 1px 12px 0px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: grid;
  grid-template-rows: 40px auto;

  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 190px;

  padding: 10px 15px;

  overflow-y: auto;
`;

export const SidebarHeader = styled.header`
  display: flex;
  box-shadow: 0 4px 12px -2px rgb(0 0 0 / 10%);
  align-items: center;
`;

export const Content = styled.div`
  overflow-y: auto;

  & a:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.detail};
  }

  position: relative;
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 12px -2px rgb(0 0 0 / 10%);
`;

export const Header = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
`;
