import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY || '');

export const fromAddress = async (address: string) => {
  const response = await Geocode.fromAddress(address);
  const { lat, lng } = response.results[0].geometry.location;

  return { lat, lng };
};
