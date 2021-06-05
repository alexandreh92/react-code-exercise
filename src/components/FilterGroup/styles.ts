import styled, { css } from 'styled-components';

type ContainerType = {
  active?: boolean;
};

export const Container = styled.div<ContainerType>`
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;

  ${({ active }) =>
    !active &&
    css`
      & > section {
        height: 0;
        overflow: hidden;
      }
    `};
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;

  margin-bottom: 5px;

  cursor: pointer;

  height: 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`;
