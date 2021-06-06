import { Coords } from 'google-map-react';

import { Pin } from './styles';

const MapPin = ({ ...props }: Coords) => {
  return <Pin color="#2a2a2a" {...props} />;
};

export default MapPin;
