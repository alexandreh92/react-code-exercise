import { Coords } from 'google-map-react';

import { Pin } from './styles';

const MapPin = ({ ...props }: Coords) => {
  return <Pin {...props} />;
};

export default MapPin;
