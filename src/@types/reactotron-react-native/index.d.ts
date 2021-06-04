import { Reactotron } from 'reactotron-core-client';
import { ReactotronReactNative } from 'reactotron-react-js';

declare global {
  interface Console {
    tron: Reactotron<ReactotronReactNative> & ReactotronReactNative;
  }
}
