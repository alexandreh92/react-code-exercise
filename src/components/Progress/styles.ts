import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const Title = styled.h4`
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const PBar = styled.progress`
  height: 8px;

  &[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #09c, #f44);

    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }

  &[value]::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  &[value]::-webkit-progress-value::before {
    content: '80%';
    position: absolute;
    right: 0;
    top: -125%;
  }
`;
