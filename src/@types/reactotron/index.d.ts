/* eslint-disable import/no-extraneous-dependencies */
import { Reactotron } from 'reactotron-core-client';
import ReactotronJS from 'reactotron-react-js';

declare global {
  interface Console {
    tron: Reactotron<ReactotronJS> & ReactotronJS;
  }
}
