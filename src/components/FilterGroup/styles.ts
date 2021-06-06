import styled, { css } from 'styled-components';

type ContainerType = {
  active?: boolean;
};

export const Container = styled.div<ContainerType>`
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;

  display: flex;
  flex-direction: column;

  ${({ active }) =>
    !active &&
    css`
      & > section {
        height: 0;
        overflow: hidden;
      }
    `};

  ${({ active }) =>
    active &&
    css`
      & > div::before {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        content: '';
        height: 2px;
        width: 100%;
        background: ${({ theme }) => theme.colors.detail};
      }
    `};
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  position: relative;

  align-self: flex-start;

  margin-bottom: 5px;

  cursor: pointer;

  height: 100%;

  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.colors.detail};
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`;
