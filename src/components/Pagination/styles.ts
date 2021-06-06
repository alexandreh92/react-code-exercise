import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;

  & div {
    margin: 0 10px;
  }
`;

type CustomButtomType = {
  disabled?: boolean;
};

export const Button = styled.div<CustomButtomType>`
  font-size: 12px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;

  padding: 10px 0;

  background: transparent;

  border: 2px solid ${({ theme }) => theme.colors.detail};

  transition: background-color 300ms ease;

  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors.detail};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.tableBorders};
      color: ${({ theme }) => theme.colors.tableBorders};
      pointer-events: none;
    `}
`;
