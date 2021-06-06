import styled from 'styled-components';
import { LocationPin } from '@styled-icons/entypo';

type CustomPin = {
  lat: number;
  lng: number;
};

export const Pin = styled(LocationPin)<CustomPin>`
  position: absolute;

  width: 40px;
  height: 40px;
  left: -20px;
  top: -20px;
`;

export const Label = styled.label``;
