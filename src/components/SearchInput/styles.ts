import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  padding: 0 10px;

  border-left: 1px solid ${({ theme }) => theme.colors.tableBorders};
  & > input {
    height: 100%;

    color: ${({ theme }) => theme.colors.backgroundContrast};

    background: ${({ theme }) => theme.colors.backgroundSecondary};

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`;
